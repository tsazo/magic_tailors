import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(app)

# Constant variable with path prefix
BASE_ROUTE = "/hello"


@app.route(BASE_ROUTE)
def hello_world():
    response_body = {
        "name": "Trinity",
        "hello": "Hello, World!"
    }

    return response_body


def handler(event, context):
    print('received event:')
    print(event)

    return awsgi.response(app, event, context)

    # return {
    #     'statusCode': 200,
    #     'headers': {
    #         'Access-Control-Allow-Headers': '*',
    #         'Access-Control-Allow-Origin': '*',
    #         'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    #     },
    #     'body': json.dumps('Hello from your new Amplify Python lambda!')
    # }
