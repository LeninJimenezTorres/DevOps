const router = require('express').Router();
const { json } = require('express/lib/response');
const http = require('http');


router.route('/').get((req,res)=>{
    msg='ERROR';
    res.json({msg});
});


router.post('/', function(req, res){
    let myJson = req.body;      // your JSON
    let name = req.body.to;	// a value from your JSON
    var keys=Object.keys(req.body);
    msg='{"message"   : "Hello '+(myJson["to"])+' your message will be send"}';
    //msg=json({msg});
    //res.send('POST JSON RECIVE!!!!!!!!');	 // echo the result back
   //res.status(201).send(myJson["to"]);	 // echo the result back
   //res.status(201).send(JSON.stringify(myJson));	 // echo the result back
   res.status(201).send(JSON.parse(msg));	 // echo the result back
   //res.status(201).send(JSON.parse('{"name":"'+myJson["to"]+'"}'));	 // echo the result back
});

module.exports = router;
