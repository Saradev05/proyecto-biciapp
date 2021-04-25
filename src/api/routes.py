"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Bike,  Activity
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

api = Blueprint('api', __name__)

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

    
@api.route('/user/bikes', methods=['GET'])
@jwt_required()
def user_bikes():
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    bikes = user.bikes
    bikes_serialized = []
    for bike in bikes : 
        bikes_serialized.append(bike.serialize())
    return jsonify(bikes_serialized)