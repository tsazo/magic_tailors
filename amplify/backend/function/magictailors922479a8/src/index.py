import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
from urllib.request import urlopen
import json
from token import api_key

app = Flask(__name__)
CORS(app)

# Constant variable with path prefix
BASE_ROUTE = "/hello"


@app.route(BASE_ROUTE)
def fetchMap():
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=restaurant&name=harbour&key={}".format(
        api_key)

    response = urlopen(url)
    data = response.read()
    dict = json.loads(data)

    print(dict)

    return dict


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
