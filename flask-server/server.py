from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import sys

app = Flask(__name__)
CORS(app)


@app.route('/', methods = ['POST'])
def cars():
    if request.method == 'POST':
        try:
            data = request.get_json()

            brand = data.get('brand')
            model = data.get('model')
            yearFrom = data.get('yearFrom')
            yearTo = data.get('yearTo')
            priceFrom = data.get('priceFrom')
            priceTo = data.get('priceTo')
            city = data.get('city')

            try:
                url = f"https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&categories.main.id=1&brand.id[0]=84&model.id[0]=35449&year[0].gte={yearFrom}&year[0].lte={yearTo}&price.USD.gte={priceFrom}&price.USD.lte={priceTo}&region.id[0]=5&city.id[0]=5"
                response = requests.get(url)
                if response.status_code == 200:
                    soup = BeautifulSoup(response.text, 'html.parser')
                    car_blocks = soup.find_all(class_='ticket-item')
                    car_data_list = []
                    for car_block in car_blocks:
                        car_name = car_block.find(class_='item ticket-title').get_text().strip()
                        car_price = car_block.find(class_='bold size22 green').get_text().strip()
                        car_year = car_name[-4:]
                        car_image = car_block.find('img')['src']
                        car_data = {
                            'title': car_name,
                            'price': car_price,
                            'yarn': car_year,
                            'image': car_image
                        }
                        car_data_list.append(car_data)
                    return jsonify(car_data_list)
                else:
                    return jsonify({'error': 'Не вдалося отримати сторінку'}), 500
            except Exception as e:
                return jsonify({'error': str(e)}), 500


            return jsonify({'message': 'Дані з форми були успішно отримані.'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 400


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
