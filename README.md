This repo is my experiment on building a blockchain API and a React client.

Start the server by:

```
cd backend
node server.js
```

Start the client by:

```
cd client
npm run start
```

Note that you need to fill in the following .env template for connecting to ethereum network:

```
API_URL = <YOUR API URL>
PRIVATE_KEY = <YOUR PRIVATE METAMASK KEY>
CONTRACT_ADDRESS= <TOKEN DEPLOYEMENT ADDRESS>
API_KEY= <API KEY FOR YOUR DEVELOPMENT PLATFORM>
```

Once you fill out this .env file, put it into `backend` folder.
