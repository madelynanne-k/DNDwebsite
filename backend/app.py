from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from auth import auth_bp
from routes import routes

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-secret'

CORS(app)  # Enable Cross-Origin Resource Sharing
JWTManager(app)

app.register_blueprint(auth_bp)
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(debug=True)
