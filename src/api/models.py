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

    # victor preguntar si puedo quitar email de update
    def update(self, json):
        print(json)
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
        # return cls.query.filter_by(email = email).first() victor

    @classmethod
    def get(cls, id):
        return cls.query.get(id)

# victor        

       
class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bike_type = db.Column(db.String(80), unique=False, nullable=False)
    wheel_inches = db.Column(db.String(80), unique=False, nullable=True)
    gears = db.Column(db.Integer)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="bikes")
