import datetime

from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient

app = Flask(__name__)

uri = "mongodb+srv://riziuzi:GClDGPPK1AZwCcEP@riziuzicluster.ulcokkb.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client.compete_database

@app.route("/api/tasks/<str:user_id", method = ["GET"])
def get_data(user_id):
    task_collection = db[f"{user_id}_collection"]
    data = list(task_collection.find())  # Convert cursor to a list of documents
    return jsonify(data)

# @app.route("/api/tasks", method=["POST"])














task_no = 1
message = "Hello tha dhaba"

usr_name = "rishiSIR"
task_collection = db[f"{usr_name}_collection"]

task_document = {
    "task_no.": task_no,
    "message": message,
    "date": datetime.datetime.now(),
}

post_id = task_collection.insert_one(task_document).inserted_id
post_id = task_collection.find()
for i in post_id:
    print(i)