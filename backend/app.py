from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Trinity",
        "about": "Hello! I'm a CS student learning to combine multiple frameworks!",
    }

    return response_body
