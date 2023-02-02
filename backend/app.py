from flask import Flask
app = Flask(__name__)


@app.route('/hello')
def hello_world():
    response_body = {
        "name": "Trinity",
        "hello": "Hello, World!"
    }

    return response_body
