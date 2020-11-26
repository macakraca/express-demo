# Simple web server for testing json response

A web server that returns JSON formatted dummy response from a `data.js` file. It returns Bob's profile data for GET type or Bob's password for POST type requests.

Web server is build on [express](http://expressjs.com/) with cors middelware.

## Install

```sh
# install
yarn

# run
yarn start
````

## Usage

Create `GET` or `POST` request at `http://localhost:3000/auth/bob`.
