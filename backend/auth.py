from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from db import get_db_connection

auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()

@auth_bp.route('/api/register', methods=['Post'])
def register():
    data = request.get_json()
    db = get_db_connection()
    hashed = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    try:
        cursor = db.cursor()
        cursor.execute("INSERT INTO users (email, password_hash) VALUES (%s, %s)", (data['email'], hashed))
        db.commit()
        return jsonify({"msg": "Registered"}), 201
    except:
        return jsonify({"msg": "Email already exists"}), 400
    
@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s", (data['email'],))
    user = cursor.fetchone()
    if user and bcrypt.check_password_hash(user['password_hash'], data['password']):
        token = create_access_token(identity=user['id'])
        return jsonify({ "token": token, "user": {"id": user['id'], "email": user['email'] } }), 200
    return jsonify({"msg": "Invalid credentials"}), 401