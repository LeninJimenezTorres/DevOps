# DevOps
BancoPichincha DevOps Test 

API REST 
- NodeJs 
- Express
- Docker
- CI by github

DESCRIPTION 
This api rest is developed with NodeJS and Express framework, it uses POST METHOD request and return a json file in the url /DevOps. Any other request return an Error plain text
This is an example of a Json post request:

{
“message” : “This is a test”,
“to”: “Juan Perez”,
“from”: “Rita Asturia”,
“timeToLifeSec” : 45
}

It will return  a Json answer like:
{
“message” : “Hello Juan Perez your message will be send”
}

Also, it incorpores a Dockerfile configuration to run an image with this api
