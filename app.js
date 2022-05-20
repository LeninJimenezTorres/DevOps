  
const express = require('express');
const cors=require('cors');
const path=require('path');
const { json, urlencoded } = express;

const router = require('./src/routes/');

const app = express();

const port = process.env.PORT || 8080;


app.use(json());
app.use(urlencoded({extended:false}));


const cornsOptions ={
    origin:'*',
    optionsSuccessStatus:200
}

app.use(cors(cornsOptions));

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World .....!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
