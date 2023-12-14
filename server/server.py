import datetime
from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from flask_cors import CORS  # Import the CORS extension
from dotenv import load_dotenv
import os
import socket

load_dotenv()

def get_ip_address():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip_address = s.getsockname()[0]
        s.close()

        return ip_address
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def updateEnv():
    ip_address_str = str(get_ip_address())

    # os.environ["HOST"] = ip_address_str
    # os.environ["PORT"] = "8088"

    with open(".env", "w") as env_file:
        env_file.write(f"REACT_APP_HOST={ip_address_str}\n")
        env_file.write("REACT_APP_PORT=8088\n")

    print(f"HOST value updated to: {ip_address_str}")
    print("PORT value updated to: 8088")
    

app = Flask(__name__)
CORS(app)
updateEnv()

uri = "mongodb+srv://riziuzi:GClDGPPK1AZwCcEP@riziuzicluster.ulcokkb.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client.compete_database

@app.route("/api/tasks/<string:user_id>",  methods=['GET'])
def get_data(user_id):
    task_collection = db[f"{user_id}_collection"]
    data = list(task_collection.find())  # Convert cursor to a list of documents
    for task in data:
        task['_id'] = str(task['_id'])
    print(user_id)
    return data

@app.route("/api/submit",  methods=['POST'])
# @app.route('/api/submit', methods=['POST'])
def submit_task():
    try:
        data = request.json
        print(data)
        usr_name = "rishiSIR"                                   # ??????????????????????????
        task_collection = db[f"{usr_name}_collection"]
        

        task_document = {
            "message": data["message"],
            "date": datetime.datetime.now(),
        }
        post_id = task_collection.insert_one(task_document).inserted_id
        
        
        
        response = {"message": "Data received successfully"}
        return jsonify(response), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Internal Server Error"}), 500




app.run(debug=True, host=os.getenv('HOST',"192.168.1.6"), port=os.getenv('PORT', 8055))



















# task_no = 1
# message = "Hello tha dhaba"

# usr_name = "rishiSIR"
# task_collection = db[f"{usr_name}_collection"]

# task_document = {
#     "task_no.": task_no,
#     "message": message,
#     "date": datetime.datetime.now(),
# }

# post_id = task_collection.insert_one(task_document).inserted_id
# post_id = task_collection.find()
# for i in post_id:
#     print(i)