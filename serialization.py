import pickle
import base64
from flask import Flask, request

app = Flask(__name__)

@app.route('/unpickle', methods=['POST'])
def unpickle():
    data = request.form['data']
    obj = pickle.loads(base64.b64decode(data))  # Vulnerable to insecure deserialization
    return "Deserialized Object: " + str(obj)

app.run(port=4000)
