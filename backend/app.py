from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{os.path.join(BASE_DIR, "database.db")}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    submission = db.Column(db.String(1000), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

@app.route('/', methods=['GET', 'POST']) 
def home():
    if request.method == 'POST':
        name = request.form.get('name')
        submission = request.form.get('submission')
        new_user = User(name=name, submission=submission)
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({
            'message': f"User {name} added!"
        }), 200

    return "Welcome to the Flask App!"

if __name__ == '__main__':
    with app.app_context():
        db.create_all() 
    app.run(debug=True)