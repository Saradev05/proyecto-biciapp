from flask_sqlalchemy import SQLAlchemy

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
   
    favorite_activities=db.Column(db.String(80), unique=False, nullable=True)

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


    def update(self, json):
        print(json)
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
            "name": self.name,
            "b_type": self.b_type,
            "wheel_inches": self.wheel_inches,
            "gears" : self.gears            
        }

    @classmethod 
    def create(cls, name, b_type, gears, wheel_inches):
        bike = cls()
        bike.b_type = b_type
        bike.wheel_inches = wheel_inches
        bike.gears = gears
        bike.name = name

        db.session.add(bike)
        db.session.commit()

    def update(self, json):
        self.b_type = json["b_type"]
        self.name = json["name"]
        self.wheel_inches = json["wheel_inches"]
        self.gears = json["gears"]
        
        db.session.add(self)
        db.session.commit()


class ForgotPasword():
    def __init__(self, email, token):
        super().__init__()
        self.email = email
        self.token = token
    def send (self):
        url = process.env.BACKEND_URL + "/api/new_password" +token
        return True