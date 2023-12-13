import datetime

from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient

app = Flask(__name__)

uri = "mongodb+srv://riziuzi:GClDGPPK1AZwCcEP@riziuzicluster.ulcokkb.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)

task_no = 1
message = "Hello tha dhaba"

db = client.compete_database
usr_name = "rishiSIR"
task_collection = db[f"{usr_name}_collection"]

task_document = {
    "task_no.": task_no,
    "message": message,
    "date": datetime.datetime.now(),
}

post_id = task_collection.insert_one(task_document).inserted_id
print(post_id)
