from flask import Flask
app = Flask(__name__)


@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Trinity",
        "about": "Hello! I'm a CS student learning to combine multiple frameworks!",
    }

    return response_body
