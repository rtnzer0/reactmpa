# Multi Page App with React

A mostly copied version of przemek-nowicki's multi-page-app-with-react, some changes added Material UI(react) and postgres is there as well but not implemented.
this is not meant to be a starting/jumping off point but just a learning repo, all due credit to Przemek Nowicki for creating this jumping off point please go check it out from his [Repo](https://github.com/przemek-nowicki/multi-page-app-with-react)

A lightweight, flexible Webpack setup with React for multi page application development. <br />

You should consider this setup when you want to use React for some sections of your page(s), but you don't want to make it Single Page Application (SPA) with only a `<div id="app">` in the body tag.

Here's a code sample to illustrate this concept for an example static page with several React components:
![picture alt](http://assets.miwu.pl/mpa-with-react-example.png "MPA with React example")

A  basic write up of this setup can be found on this [Medium post](https://itnext.io/building-multi-page-application-with-react-f5a338489694).

**Notice:** the latest code base includes the following updates: 
- webpack bundles with hashed filenames
- code linter (with Airbnb style guide)
- enabled CSS modules (added example css styles)
- minimize webpack bundles with TerserPlugin (i.e. js code minification)
- file loader to resolve imports on fonts and images (added example product image)


## Quick Start

install dependencies
```
$ npm install
```

## Development & Build

**dev**

```
$ npm start
```
***start** script runs server in development mode with hot module replacement and open the browser after server had been started.*

**build**

```
$ npm run build
```

***build** script runs in production mode to improve load time (i.e. minified bundles, lighter weight source maps etc)*

**linting**

```
$ npm run lint
```

***lint** script runs linter to check for lint errors in src directory*
