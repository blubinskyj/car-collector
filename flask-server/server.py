from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods = ['POST'])
def cars():
    res = request.json
    data = jsonify(res)

    return data
        
# https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&categories.main.id=1&brand.id[0]=84&model.id[0]=35449&year[0].gte=1900&year[0].lte=2023&price.USD.gte=1&price.USD.lte=100000000&region.id[0]=5&city.id[0]=5
# brand.id[0]=84
# model.id[0]=35449
# year[0].gte=1900
# year[0].lte=2023
# price.USD.gte=1
# price.USD.lte=100000000
# region.id[0]=5


# https://www.olx.ua/uk/transport/legkovye-avtomobili/volkswagen/lvov/?currency=USD&search%5Bfilter_float_price:from%5D=1&search%5Bfilter_float_price:to%5D=10000000&search%5Bfilter_float_motor_year:from%5D=1990&search%5Bfilter_float_motor_year:to%5D=2023&search%5Bfilter_enum_model%5D%5B0%5D=golfvolkswagen


if __name__ == '__main__':
    app.run(debug=True)
