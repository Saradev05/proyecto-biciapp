from flask_sqlalchemy import SQLAlchemy
import os

db = SQLAlchemy()
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=True)
    surname = db.Column(db.String(100), unique=False, nullable=True)
    age = db.Column(db.Integer, unique=False, nullable=True)
    nick_name =db.Column(db.String(100), unique=True, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    address1= db.Column(db.String(80), unique=False, nullable=True)
    address2= db.Column(db.String(80), unique=False, nullable=True)
    city=db.Column(db.String(80), unique=False, nullable=True)
    postal_code=db.Column(db.String(80), unique=False, nullable=True)
    role= db.Column(db.String(80), unique=False, nullable=True)
    favorite_activities=db.Column(db.String(80), unique=False, nullable=True)
    token =db.Column(db.String(100), unique=True, nullable=True)
    is_admin = db.Column(db.Boolean(), nullable=False, default=False, server_default='f')
    user_activity= db.relationship("Activity", back_populates="activity_user")
    bikes = db.relationship("Bike", back_populates="user")
    def __repr__(self):
        return '<User %r>' % self.nick_name
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "surname": self.surname,
            "nick_name": self.nick_name,
            "address1": self.address1,
            "address2": self.address2,
            "city": self.city,
            "postal_code": self.postal_code,
            "is_admin": self.is_admin
            # do not serialize the password, its a security breach
        }
    @classmethod 
    def create_user(cls, email, password):
        user = cls()
        user.password = password
        user.is_active = True
        user.email = email
        db.session.add(user)
        db.session.commit()
        return user

    def update(self, json):
        
        self.email = json["email"]
        self.name = json["name"]
        self.surname = json["surname"]
        if "age" in json:
            self.age = json["age"]
        self.nick_name = json["nick_name"]
        if "password" in json:
            self.password = json["password"]
        if "is_activo" in json:
            self.is_active = json["is_active"]
        self.address1 = json["address1"]
        self.address2 = json["address2"]
        self.city = json["city"]
        self.postal_code = json["postal_code"]
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_login_credentials(cls, email, password):
        return cls.query.filter_by(email = email).filter_by(password = password).one_or_none()

    @classmethod
    def get(cls, id):
        return cls.query.get(id)

    @classmethod
    def get_user_email(cls, email):
        return cls.query.filter_by(email = email).one_or_none()
    
     
class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    b_type = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=True)
    wheel_inches = db.Column(db.String(80), unique=False, nullable=True)
    gears = db.Column(db.String(60),unique=False,nullable=True )
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="bikes")

    def __repr__(self):
        return '<Bike %r>' % self.b_type

    def serialize(self):
        return {
            "user_id": self.user_id,
            "b_type": self.b_type,
            "name": self.name,
            "wheel_inches": self.wheel_inches,
            "gears": self.gears,           
        }

    @classmethod 
    def create(cls, user_id, b_type, name, wheel_inches, gears):
        bike = cls()
        bike.user_id = user_id
        bike.b_type = b_type
        bike.name = name
        bike.wheel_inches = wheel_inches
        bike.gears = gears
        db.session.add(bike)
        db.session.commit()
        return bike
        
    def update(self, json):
        # self.user_id= "user_id"]
        self.b_type = json["b_type"]
        self.name = json["name"]
        self.wheel_inches = json["wheel_inches"]
        self.gears = json["gears"]
        db.session.add(self)
        db.session.commit()


class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(180), unique=False, nullable=True)
    route = db.Column(db.String(180), unique=False, nullable=True)
    dificulty = db.Column(db.String(120), unique=False, nullable=True)
    description=db.Column(db.String(10000000), unique=False, nullable=True)
    user_id= db.Column(db.Integer, db.ForeignKey("user.id"))
    activity_user = db.relationship("User", back_populates="user_activity")

    def __repr__(self):
        return '<Activity %r>' % self.name

    def serialize(self):
        return {
            "name": self.name,
            "route": self.route,
            "dificulty": self.dificulty,
            "description" : self.description        
        }

    @classmethod 
    def create(cls, user_id, name, route, dificulty, description):
        activity = cls()
        activity.user_id= user_id
        activity.name=name
        activity.route = route
        activity.dificulty = dificulty
        activity.description = description
        db.session.add(activity)
        db.session.commit()

    def update(self, json):
        self.name= json["name"]
        self.route = json["route"]
        self.dificulty = json["dificulty"]
        self.description = json["description"]
        db.session.add(self)
        db.session.commit()
    
class ForgotPasswordEmail():
    def __init__(self, email, token):
        super().__init__()
        self.email = email
        self.token = token

    def send (self):
        url = os.getenv("FRONTEND_URL") + "/newPassword/" + str(self.token)
        # return True
        return url
