"""CodeAlong for Python Requests"""

import requests

# term = 'Jack Johnson'
# limit = 5

# res = requests.get(
#     'https://itunes.apple.com/search',
#     params={'term': term, 'limit': limit}
# )

# data = res.json()

# for result in data['results']:
#     print(result['trackName'])
#     print(result['collectionName'])

data = {
    'username' : 'chicenz',
    'tweets' : [
        'hello', 'goodbye!', 'bock bock!', {
            'id' : 1, 'text' : 'my first tweet!'
        }
    ]
}

requests.post('https://eo36io9tvt7mx2d.m.pipedream.net',
    json=data)
