import requests
from bs4 import BeautifulSoup as BS

r = requests.get('https://auto.ria.com/uk/legkovie/volkswagen/?page=1')
html = BS(r.content, 'html.parser')

for el in html.select("#searchResults > .ticket-item "):
    title = el.select(".content-bar > .content > .head-ticket .address span")
    print(title[0].text)