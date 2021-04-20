# import os
# import click
# from flask import Flask, request, jsonify, url_for, send_from_directory
# from flask_migrate import Migrate
# from flask_swagger import swagger
# from flask_cors import CORS
# from api.utils import APIException, generate_sitemap
# from api.models import db
# from api.routes import api
# from api.admin import setup_admin
# from api.models import User


# #   user_admin = User.create(""email": "aleida1983@hotmail.com","password":"123"", "is_admin":True)

# @app.cli.command("create-user")
# @click.argument("name")
# @click.argument("email")
# @click.argument("password")


# def create_user(email, password,):
#     user("aleida1983@hotmail.com", "123","admin", True). save(),
#     user=User(),
#     user.email= email,
#     user.password=password,
#     user.is_active=False

#     db.session.add(user)
#     de.session.commit()