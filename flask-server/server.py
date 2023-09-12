from flask import Flask ,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods = ['GET','POST'])
def cars():
    if request.method == 'POST':
        print(request.form)
        



if __name__ == '__main__':
    app.run(debug=True)
