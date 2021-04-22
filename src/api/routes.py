"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Bike,  Activity
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import datetime 



api = Blueprint('api', __name__)
app = Flask(__name__)
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=30)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend"
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


@api.route('/profile/new-bike', methods=['POST'])
@jwt_required
def new_user_bike():
    body = request.get_json()
    current_user_id = get_jwt_identity()

    user = User.get(current_user_id)
    bike = Bike.create(body["bike_type"], body["wheel_inches"], body["gears"])
    user.bikes.append(bike)

    user.save()


@api.route('/activity', methods=['GET'])
@jwt_required()
def show_activity():
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    activities = User.activity
    activity_serialized = []
    for activity in activities :
        activities_serialized.append(activity.serialize())
    return jsonify(activities_serialized)
    


@api.route('/activity', methods=['POST'])
@jwt_required()
def post_activity():
    request_json = request.get_json()
    current_user_id = get_jwt_identity()
    
    current_user = User.get(current_user_id)
    new_activity= Activity.create(current_user_id,request_json["name"],request_json["route"], request_json["dificulty"], request_json["description"])
   
    return jsonify(current_user.serialize())