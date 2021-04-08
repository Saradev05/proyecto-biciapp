"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

api = Blueprint('api', __name__)


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
    
    user = User.get_login_credentials(email)
    
    if user is None:
        raise APIException("Email o contraseña incorrecta")
    

    access_token = create_access_token(identity = user.id )
    return jsonify({"access_token": access_token })

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