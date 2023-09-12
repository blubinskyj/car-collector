from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def members():
    return {'members': ['m1', 'm2', 'm3']}


if __name__ == '__main__':
    app.run(debug=True)
