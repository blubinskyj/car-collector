from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import random
import sys

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
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
            car_data_list = []
            try:
                url = f"https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&categories.main.id=1&brand.id[0]=84&model.id[0]=35449&year[0].gte={yearFrom}&year[0].lte={yearTo}&price.USD.gte={priceFrom}&price.USD.lte={priceTo}&region.id[0]=5&city.id[0]=5"
                response = requests.get(url)

                # olxUrl = f"https://www.olx.ua/uk/transport/legkovye-avtomobili/volkswagen/lvov/?currency=USD&search%5Bprivate_business%5D=private&search%5Bfilter_float_price:from%5D=1000&search%5Bfilter_float_price:to%5D=10000&search%5Bfilter_float_motor_year:from%5D=2000&search%5Bfilter_float_motor_year:to%5D=2015&search%5Bfilter_enum_model%5D%5B0%5D=golf&view=list"
                # responseOlx = requests.get(olxUrl)
                if response.status_code == 200:

                    soup = BeautifulSoup(response.text, 'html.parser')
                    car_blocks = soup.find_all(class_='ticket-item')

                    for car_block in car_blocks:
                        car_name = car_block.find(class_='item ticket-title').get_text().strip()
                        car_price = car_block.find(class_='bold size22 green').get_text().strip()
                        car_year = car_name[-4:]
                        car_image = car_block.find('img')['src']
                        car_city = car_block.find(
                            class_='item-char view-location js-location').get_text().strip().replace(' ( від )', '')
                        car_run = car_block.find(class_='unstyle characteristic').find(
                            class_='item-char js-race').get_text().strip()
                        car_link = car_block.find(class_='m-link-ticket').get("href")
                        car_transmission = list(car_block.find(class_='unstyle characteristic'))[-2].get_text().strip()
                        car_volume = list(car_block.find(class_='unstyle characteristic'))[-4].get_text().strip()
                        car_data = {
                            'title': car_name,
                            'price': car_price,
                            'yarn': car_year,
                            'image': car_image,
                            'city': car_city,
                            'run': car_run,
                            'link': car_link,
                            'site': 'autoria',
                            'transmission': car_transmission,
                            'volume': car_volume
                        }
                        car_data_list.append(car_data)
                        car_data_list.append(
                            {
                                'title': 'Volkswagen Golf 6',
                                'price': '8100',
                                'yarn': '2010',
                                'image': 'https://ireland.apollo.olxcdn.com:443/v1/files/ehqajxli5qmy-UA/image;s=200x0;q=50',
                                'city': 'Львів',
                                'run': '192 тис. км',
                                'link': 'https://www.olx.ua/d/uk/obyavlenie/volkswagen-golf-6-IDQHj5i.html',
                                'site': 'Olx',
                                'transmission': 'Автоматична',
                                'volume': '1.6 л.'
                            }
                        )
                        car_data_list.append({
                                'title': 'Volkswagen Golf 6',
                                'price': '8100',
                                'yarn': '2010',
                                'image': 'https://ireland.apollo.olxcdn.com:443/v1/files/ehqajxli5qmy-UA/image;s=200x0;q=50',
                                'city': 'Львів',
                                'run': '192 тис. км',
                                'link': 'https://www.olx.ua/d/uk/obyavlenie/volkswagen-golf-6-IDQHj5i.html',
                                'site': 'Olx',
                                'transmission': 'Автоматична',
                                'volume': 'Бензин 1.6 л.'
                            })
                        car_data_list.append({
                                'title': 'Volkswagen Golf V Goal',
                                'price': '5650',
                                'yarn': '2006',
                                'image': 'https://ireland.apollo.olxcdn.com/v1/files/0p3t29cfsuyl3-UA/image;s=200x0;q=50',
                                'city': 'Львів',
                                'run': '262 тис. км',
                                'link': 'https://www.olx.ua/d/uk/obyavlenie/volkswagen-golf-v-goal-IDTmb62.html',
                                'site': 'Olx',
                                'transmission': 'Механіка',
                                'volume': 'Бензин 1.4 л.'
                            },
                        )
                        random.shuffle(car_data_list)

                    # soupOlx = BeautifulSoup(responseOlx.text, 'html.parser')
                    # car_blocks_olx = soupOlx.find_all(class_='css-1sw7q4x')
                    #
                    # for index, car_block_olx in enumerate(car_blocks_olx):
                    #     if index == 10:
                    #         break
                    #     car_name_olx = car_block_olx.find(class_='css-16v5mdi er34gjf0').get_text().strip()
                    #     car_price_olx = car_block_olx.find(class_='css-10b0gli er34gjf0').get_text().strip()
                    #     car_image_olx = car_block_olx.find(class_='css-gl6djm').find('img')['src']
                    #     car_city_olx = car_block_olx.find(
                    #         class_='css-veheph er34gjf0').get_text().strip().split(',')[0]
                    #     car_link_olx = 'https://www.olx.ua/'+car_block_olx.find(class_='css-rc5s2u').get("href")
                    #     car_run_olx = list(car_block_olx.find(class_='css-t4djs0'))[0].get_text().strip().split('-')[1]
                    #     car_year_olx = list(car_block_olx.find(class_='css-t4djs0'))[0].get_text().strip().split('-')[0]
                    #     car_transmission_olx = list(car_block_olx.find(class_='css-t4djs0'))[1].get_text().strip()
                    #     car_volume_olx = list(car_block_olx.find(class_='css-t4djs0'))[3].get_text().strip()
                    #     car_data_olx = {
                    #                 'title': car_name_olx,
                    #                 'price': car_price_olx,
                    #                 'yarn': car_year_olx,
                    #                 'image': car_image_olx,
                    #                 'city': car_city_olx,
                    #                 'run': car_run_olx,
                    #                 'link': car_link_olx,
                    #                 'site': 'autoria',
                    #                 'transmission': car_transmission_olx,
                    #                 'volume': car_volume_olx
                    #     }
                    #     car_data_list.append(car_data_olx)
                    return jsonify(car_data_list)
                else:
                    return jsonify({'error': 'Не вдалося отримати сторінку'}), 500
            except Exception as e:
                return jsonify({'error': str(e)}), 500

            return jsonify({'message': 'Дані з форми були успішно отримані.'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
