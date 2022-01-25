# todos-express-openidconnect

This app illustrates how to use [Passport](https://www.passportjs.org/) with
[Express](https://expressjs.com/) to sign users in via OpenID Connect.  Use this
example as a starting point for your own web applications.

## Quick Start

To run this app, clone the repository and install dependencies:

```bash
$ git clone https://github.com/passport/todos-express-openidconnect.git
$ cd todos-express-openidconnect
$ npm install
```

This app must be configured with an OpenID Provider (OP)'s endpoints, as well as
a client ID and secret that has been issued by the OP.

The endpoints should be set as options to `OpenIDConnectStrategy` in
[routes/auth.js](https://github.com/passport/todos-express-openidconnect/blob/master/routes/auth.js#L8-L11).

Once the client ID and secret have been obtained, create a `.env` file and add
the following environment variables:

```
CLIENT_ID=__INSERT_CLIENT_ID_HERE__
CLIENT_SECRET=__INSERT_CLIENT_SECRET_HERE__
```

Start the server.

```bash
$ npm start
```

Navigate to [`http://localhost:3000`](http://localhost:3000).
