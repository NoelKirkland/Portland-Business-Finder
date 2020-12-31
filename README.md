# Portland Business Finder

* [Demo](#1)<br>
* [Source](#2)<br>
* [API](#3)<br>
* [Bugs](#4)<br>
* [Contact](#5)<br>
* [Tech](#6)<br>
* [License](#7)<br>

### By Noel R. Kirkland - 12/23/2020

<img src="https://drive.google.com/uc?export=view&id=1GwNvxjmQA-CpiTkx8KcVe3TeXp7PaapA">

### Portland Business Finder is a cross-platform mobile application written in JavaScript using React-Native. With this application you can take full advantage of the Yelp API to search businesses in your area. Your search results are separated into three price categories: "$" for the most budget friendly businesses, "$$" for more average prices, and "$$$" for businesses on the pricier end. Each listing will display the name of the business, a thumbnail image, star rating, and number of reviews. Tap on a listing's thumbnail image to see more details about that business. On a particular business's details screen you will find things like: additional images, their listed address, and whether they are open or not.

## Try it for yourself <a name="1"></a>
* Download the Expo client app for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://itunes.com/apps/exponent)
* Tap the "Profile" tab to sign in or create an account for free
* Scan the QR code below and wait for the project to compile
* Have fun!

<img src="https://drive.google.com/uc?export=view&id=1sYr1rtQtCRujvXTZiRhKgzqdOZ73UjUQ" alt="https://expo.io/@noelkirkland/projects/portlandbusinessfinder">

## Download and Run Locally <a name="2"></a>
* _Download this application from HitHub_
  1. _Open the following web address in your browser: `https://github.com/NoelKirkland/Portland-Business-Finder`_
  2. _Click the green button labeled "Clone or download" and download the zip to your computer_
  3. _Open the downloaded application in a text editor (V.S. Code preferred) and run the command `npm install` in your terminal_
  4. _In your terminal, run the command `expo start --ios` to run the application in an [iPhone emulator](https://medium.com/@daspinola/setting-up-android-and-ios-emulators-22d82494deda), `expo start --android` to run the application in an [android emulator](https://medium.com/@daspinola/setting-up-android-and-ios-emulators-22d82494deda), or `expo start --web` to run the application in your browser_
  5. Have fun!


## API info <a name="3"></a>

_**End Points**_

_Request Body:_ https&#8758;//api&#46;yelp&#46;com/v3/businesses
```
GET /search?location={searchArea}
GET /search?limit={maxReturns}
GET /search?term={searchTerm}
GET /{id}
```

_**Path Parameters**_
|  Parameter | Type | Default | Required | location |
| :--- | :--- | :--- | :--- | :--- |
|  limit | string | Portland%20OR | true | Returns JSON array of businesses in that area |
|||||

|  Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|  limit | int | 50 | false | Sets max JSON array length |
|||||

|  Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|  term | string | pasta | false | Returns filtered JSON array |
|||||

|  Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|  id | string | none | false | Returns business details JSON |
|||||

_**Sample JSON response**_

_HTTP request:_ /search?limit=2&term=taco&location=Portland%20OR
```
{
    "businesses": [
        {
            "id": "wkMtJhdSDWPuBfiyz5BFgQ",
            "alias": "birrieria-la-plaza-portland",
            "name": "Birrieria La Plaza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/kCxJNftm03Ylx-VQCDsr0Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/birrieria-la-plaza-portland?adjust_creative=NnHxkL8zEs-ls1Om7sfu7A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NnHxkL8zEs-ls1Om7sfu7A",
            "review_count": 81,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                },
                {
                    "alias": "foodtrucks",
                    "title": "Food Trucks"
                }
            ],
            "rating": 5.0,
            "coordinates": {
                "latitude": 45.518982,
                "longitude": -122.512881
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "600 SE 146th Ave",
                "address2": null,
                "address3": "",
                "city": "Portland",
                "zip_code": "97233",
                "country": "US",
                "state": "OR",
                "display_address": [
                    "600 SE 146th Ave",
                    "Portland, OR 97233"
                ]
            },
            "phone": "+18009999999",
            "display_phone": "(800) 999-9999",
            "distance": 11009.663295505054
        },
        {
            "id": "QjN7LFZ7zU4xmdl42nFuYg",
            "alias": "taqueria-los-puñales-portland",
            "name": "Taqueria Los Puñales",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/sBvyOKcqqhVbHc9b7YWmoA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/taqueria-los-pu%C3%B1ales-portland?adjust_creative=NnHxkL8zEs-ls1Om7sfu7A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NnHxkL8zEs-ls1Om7sfu7A",
            "review_count": 72,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                }
            ],
            "rating": 5.0,
            "coordinates": {
                "latitude": 45.516289,
                "longitude": -122.630592
            },
            "transactions": [
                "delivery"
            ],
            "location": {
                "address1": "3312 SE Belmont St",
                "address2": null,
                "address3": "",
                "city": "Portland",
                "zip_code": "97214",
                "country": "US",
                "state": "OR",
                "display_address": [
                    "3312 SE Belmont St",
                    "Portland, OR 97214"
                ]
            },
            "phone": "+15032067233",
            "display_phone": "(503) 206-7233",
            "distance": 1832.8268304623393
        }
    ],
    "total": 1800,
    "region": {
        "center": {
            "longitude": -122.65411376953125,
            "latitude": 45.515785397030584
        }
    }
}
```

_HTTP request:_ /E6aYeFovWUzogH0ygo31jg
```
{
    "id": "E6aYeFovWUzogH0ygo31jg",
    "alias": "ox-portland",
    "name": "Ox",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/p0XLmtOZSTnXh33zlmV5DQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/ox-portland?adjust_creative=NnHxkL8zEs-ls1Om7sfu7A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=NnHxkL8zEs-ls1Om7sfu7A",
    "phone": "+15032843366",
    "display_phone": "(503) 284-3366",
    "review_count": 1016,
    "categories": [
        {
            "alias": "steak",
            "title": "Steakhouses"
        },
        {
            "alias": "wine_bars",
            "title": "Wine Bars"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "2225 NE Martin Luther King Jr Blvd",
        "address2": "",
        "address3": "",
        "city": "Portland",
        "zip_code": "97212",
        "country": "US",
        "state": "OR",
        "display_address": [
            "2225 NE Martin Luther King Jr Blvd",
            "Portland, OR 97212"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 45.53935,
        "longitude": -122.66213
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/p0XLmtOZSTnXh33zlmV5DQ/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/-DHj6X7EOyTA70nDse9o4A/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/8_0Jtmz52WIR8ZPU8dI8ag/o.jpg"
    ],
    "price": "$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1630",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1630",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1630",
                    "end": "2200",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1630",
                    "end": "2200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1630",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery"
    ]
}
```

## Known Bugs <a name="4"></a>

There are no known bugs at this time

## Support and Contact Details <a name="5"></a>

If there are any issues or questions contact me at noelkirkland@gmail.com

## Technologies Used <a name="6"></a>

*  JavaScript & React Native
*  Expo
*  Axios
*  Yelp developer API
*  CSS
*  Markdown


### License <a name="7"></a>

 -- This project uses the [MIT](https://opensource.org/licenses/MIT) permissive free software license and is the intellectual property of Noel R. Kirkland - 2020