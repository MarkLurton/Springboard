"""Models for Flask SQLAlchemy app"""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    """Connect to app to database"""
    db.app = app
    db.init_app(app)

class Pet(db.Model):
    """SQLAlchemy pets model"""
    __tablename__ = 'pets'

    @classmethod
    def get_by_species(cls, species):
        """Returns all pets of given species"""
        return cls.query.filter_by(species=species).all()

    @classmethod
    def get_all_hungry(cls):
        """Returns all hungry pets"""
        return cls.query.filter(Pet.hunger > 20).all()

    def __repr__(self):
        pet = self
        return f"<Pet id={pet.id} name={pet.name} species={pet.species} hunger={pet.hunger}>"

    id = db.Column(db.Integer,
                    primary_key=True,
                    autoincrement=True)

    name = db.Column(db.String(50),
                    nullable = False,
                    unique = True)

    species = db.Column(db.String(30), nullable=True)

    hunger = db.Column(db.Integer, nullable=False, default=20)

    def greet(self):
        """Pet greeting"""
        return f"Hi, I am {self.name} the {self.species}."

    def feed(self, amt=20):
        """Update pet hunger"""
        self.hunger -= amt
        self.hunger = max(0, self.hunger)
        db.session.add(self)
        db.session.commit()
