  
const express = require('express');
const cors=require('cors');
const path=require('path');
const { json, urlencoded } = express;

const router = require('./src/routes/');

const app = express();

const port = process.env.PORT || 8080;

const hostname = '0.0.0.0';

app.use(json());
app.use(urlencoded({extended:false}));

const cornsOptions ={
    origin:'*',
    optionsSuccessStatus:200
}

app.use(cors(cornsOptions));

app.use(router);

app.get('/', (req, res) => {
  res.send('API REST with NodeJS-Express, dockerized and CI with GitHub');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})
