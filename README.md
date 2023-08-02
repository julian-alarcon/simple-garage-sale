# Simple Garage Sale website

Simple website for Garage Sale made with React

## Demo

You can check out a demo here:
[https://julian-alarcon.github.io/simple-garage-sale/](https://julian-alarcon.github.io/simple-garage-sale/)

## Description

This simple website made with React will help you offer your stuff to sell
and have a track and a public place to show the process, status, photos, and
description of all the items.

The main focus is to be simple, which is why it can be built as a Static Web Page.
It also has a responsive design for browsing on desktop or mobile.

From the price section, there is a link to your WhatsApp number to get a message
with the name of the desired item.

## Features

* A really simple website using React and Babel.
* Responsive design supporting desktop and mobile.
* Use libraries/fonts hosted in CDNs.
* Use of a JSON file to define items to sell (`data.json`).
* Use images for each item.
* Set different status for each item.
* Link to WhatsApp message to be contacted.

## Description used by Items data

* "name": Name of the
* "url": Link to more info, could be linked to an image.
* "imageUrl": name of the Image file in `/img`.
* "originalPrice": Original price for your item
  (**this is NOT SHOWN on the website**, used only for your stats).
* "price": Price of the item.
* "details": Array of descriptions for your item, each item is an item
  list`[]`.
* "state": State of the item (see below for details).
* "purchaser": An integer for the purchaser
  (**this is NOT SHOWN on the website**, used only for your stats). Default
  undefined as "id".

### Item Status

There are 4 different kinds of status:

* Available (`available`): Green banner on top.
* Reserved (`reserved`): Blue banner in the middle.
* Sold (`sold`): Red banner in the top and greyed image.
* Not available (`notavailable`): Grey banner in the middle and greyed image.

#### Internal information available

There is a `purchaser` internal information available. You can use it to see an
ID and use that information to track the purchasers. The same with
`originalPrice`.

An example will be to import the `data.json` file to a Google Spreadsheet using
a Custom Function [https://github.com/bradjasper/ImportJSON](https://github.com/bradjasper/ImportJSON)
and create a section with Purchaser and assign an id and name to each of them.

Also, to compare the earnings and losses for each item using the `originalPrice`
and `price` values.

## Test in your local with Docker

> You need to have Docker installed/configured

Go to the main path of the directory and use this command

```sh
docker run --rm -p 8080:80 --name web -v $(pwd):/usr/share/nginx/html nginx
```

Now your website should be available at the address
[http://0.0.0.0:8080](http://0.0.0.0:8080)!

## Publish using GitHub Pages for free

This website can be published using the GitHub Pages feature by selecting the
desired branch to publish.

More info:
[Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Credits

* [Julian Alarcon](https://github.com/julian-alarcon/)
* [Milena Suarez](https://github.com/milenasuarezl)

## License

MIT License

**Based on [https://github.com/marcbarbosa/garage](https://github.com/marcbarbosa/garage)**
