import datetime
from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from flask_cors import CORS  # Import the CORS extension

host = "192.168.1.7"  # Replace with your machine's IP address
port = 5000  # You can choose any available port
app = Flask(__name__)
CORS(app)

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




app.run(debug=True, host=host, port=port)








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