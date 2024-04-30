import json
from flask import Flask, jsonify, request
import joblib
from flask_cors import CORS

app = Flask(__name__)

model_path = "./back-end/knn_model.pkl"  # Replace with the actual path
model = joblib.load(model_path)


CORS(app)
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    df = []
    df.append(int(data['Pregnancies']))
    df.append(int(data['Glucose']))
    df.append(int(data['BloodPressure']))
    df.append(int(data['SkinThickness']))
    df.append(int(data['Insulin']))
    df.append(float(data['BMI']))
    df.append(float(data['DPF']))
    df.append(int(data['Age']))
    rule1 = (float(data['BMI']) < 23.4) & (float(data['DPF']) <= 0.647)
    rule2 = (float(data['Glucose']) <= 100) & (float(data['BloodPressure'] )<= 70)
    rule3 = (float(data['SkinThickness']) <= 22) & (float(data['BMI']) < 25.8)
    if rule1 | rule2 | rule3:
        return jsonify({'Result':0}),200
    else:
        result = model.predict([df])
        return jsonify({'Result':int(result[0])}),200



if __name__ == '__main__':
   app.run(port=5000)