from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/task_manager'
mongo = PyMongo(app)

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = mongo.db.tasks.find()
    result = []
    for task in tasks:
        result.append({
            'id': str(task['_id']),
            'title': task['title'],
            'description': task['description']
        })
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
