# Simple Garage Sale website

Simple website for Garage Sale made with React

## Description

This simple website made with React will help you to offer your stuff to seel and have a
track and a public place to show the proces, status, photos and description of all the
items.

The main focus is to be simple, that's why it can be build as an Static Web Page.
It also have a responsive design for browsing in desktop or mobile.

From the price section ther is a link to your WhatsApp number to get a message with
the name of the desired item.

### Item Status

There are 4 different kind of status:

* Available (`available`)
* Reserved (`reserved`)
* Sold (`sold`)
* Unavailable (`unavailable`)

#### Internal information available

There is a `purchaser` internal information available. You can use it to se an ID and use
that information to track the purchasers.

## Test in your local with Docker

> You need to have Docker installed/configured

Go to the main path of the directory and use this command

```sh
docker run --rm -p 8080:80 --name web -v $(pwd):/usr/share/nginx/html nginx
```

Now your website should be available in the address [http://0.0.0.0:8080](http://0.0.0.0:8080)!

## Publish using Github Pages for free

This website can be publish using the Github Pages feature selecting the desired branch to publish
More info: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Credits

* [Julian Alarcon](https://github.com/julian-alarcon/)
* [Milena Suarez](https://github.com/milenasuarezl)

## License

MIT License

**Based on [https://github.com/marcbarbosa/garage](https://github.com/marcbarbosa/garage)**
