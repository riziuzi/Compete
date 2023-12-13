from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient

app = Flask(__name__)

uri = "mongodb+srv://riziuzi:GClDGPPK1AZwCcEP@riziuzicluster.ulcokkb.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)

# Print connection details
print("Connected to:", uri)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)