"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import stripe
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Bike,  Activity, ForgotPasswordEmail
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import random
from api.aws import upload_file_to_s3





stripe.api_key = 'sk_test_51IqFlLJgftEGfFd19KMeIU7sBuctIrL1VZHDhIUyPMcafsuK8HolY5RbBHIaL0Aj1St518BEY21ehKGzmw2yqDB400KokTMYZB'
YOUR_DOMAIN = os.getenv("FRONTEND_URL")

api = Blueprint('api', __name__)

@api.route('/create-checkout-session', methods=['POST'])

def create_checkout_session():
    request_json = request.get_json()

    try:
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'eur',
                        'unit_amount': 2000,
                        'product_data': {
                            'name': 'Ruta Senda costera de Llanes a Borizu',
                            'images': ['https://i.imgur.com/w8rVx7V.jpeg'],
                        },
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url= YOUR_DOMAIN + '?success=true',
            cancel_url= YOUR_DOMAIN + '?canceled=true',
        )
        return jsonify({'id': checkout_session.id})

    except Exception as e:
        return jsonify(error=str(e)), 403


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Bienvenido a Biciapp! queremos conocerte en el próximo evento, consulta las proximas actividades"
    }
    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    User.create_user(body["email"], body["password"])
    return jsonify({"message":"registrado!"}), 200


@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    email = body["email"]
    password = body["password"]
    user = User.get_login_credentials(email, password )
    if user is None:
        raise APIException("Email o contraseña incorrecta")
    access_token = create_access_token(identity = user.id )
    return jsonify({"access_token": access_token, "user": user.serialize() }), 200


@api.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    return jsonify(user.serialize())


@api.route('/profile', methods=['PUT'])
@jwt_required()
def post_profile():
    request_json = request.get_json()
    current_user_id = get_jwt_identity()
    current_user = User.get(current_user_id)
    current_user.update(request_json)
    return jsonify(current_user.serialize())


@api.route('/new_bike', methods=['POST'])
@jwt_required()
def new_user_bike():
    body = request.get_json()
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    bike = Bike.create(current_user_id, body["b_type"], body["name"], body["wheel_inches"], body["gears"])
    user.bikes.append(bike)
    if bike is not None: 
        return jsonify(bike.serialize()), 200
    else : 
        return jsonify({"error": "no se ha guardado"   }), 400

#lista de las actividades de un usuario
@api.route('/activity', methods=['GET'])
@jwt_required()
def show_activity():
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    activities = Activity.get_by_user(current_user_id)
    activities_serialized = []
    for activity in activities :
        activities_serialized.append(activity.serialize())
       
    return jsonify(activities_serialized),200


@api.route('/activity', methods=['POST'])
@jwt_required()
def post_activity():
    request_json = request.get_json()
    current_user_id = get_jwt_identity()
    current_user = User.get(current_user_id)

    new_activity= Activity.create(current_user_id,request_json["name"],request_json["route"], request_json["dificulty"], request_json["description"])
    return jsonify(current_user.serialize()), 201

    
@api.route('/user/bikes', methods=['GET'])
@jwt_required()
def user_bikes():
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    bikes = user.bikes
    bikes_serialized = []
    for bike in bikes : 
        bikes_serialized.append(bike.serialize())
            
    return jsonify(bikes_serialized), 200



@api.route('/forgot-password', methods=['POST'])
def forgot_password():
    request_json = request.get_json()
    print(request_json)
    email = request_json["email"]
    
    if email is None:
        raise APIException("Email required")
    
    token = random.randint(100000000,199990000)
    user = User.get_user_email(email)
    if user is None:
        raise APIException("user no encontrado")
    user.token = str(token)

    db.session.commit()

    forgot_password = ForgotPasswordEmail(email, token)
    # forgot_password.send()      
    url= forgot_password.send()

    # return jsonify({}), 200
    return jsonify({"url": url, "token": token }), 200
   

@api.route('/newPassword', methods=['POST'])
def reset_password():
    request_json = request.get_json()
    print(type(request_json["token"]))
    # email = request_json["email"]
    token = str(request_json["token"])
    password = request_json["password"]

    user = User.get_for_forgot( token)
    user.password = password
    user.token = None

    db.session.commit()

    return jsonify({}), 200
    #mensaje respuesta



@api.route('/uploadFoto', methods=['POST'])
def upload_fotos():
#     files = request.files
#     current_user_id = get_jwt_identity()
#     user = User.get(current_user_id)
#     # user id =request.form.get("id_user")
#     for key in files:
#         file = files[key]
#         url_image = ""
#         try: 
#             url_image = upload_file_to_s3(file, os.environ.get("S3_BUCKET_NAME"))
#         except Exception as e:
#             raise APIException("ha fallado la subida de la imagen")

#         # now = datetime.datetime.now()


#     return jsonify({}), 200

# @api.route("/upload-images", methods=["POST"])
# def upload_images():
    url_image= ''
    files = request.files
    print(files)
    for key in files:
        file = files[key]
        print(file)
        # user_id = 10
        try:
            # new_filename ="{}-{}".format(user_id, file.filename)
            url_image = upload_file_to_s3(file, os.environ.get('S3_BUCKET_NAME'))
        except Exception as e:
            print(e)
            raise APIException(e)

    return jsonify({"url":url_image}), 200


