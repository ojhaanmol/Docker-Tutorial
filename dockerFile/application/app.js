const express =  require('express');

const app = express();

app.get('/ping',(request,response)=>{
    response.json({status:'00',message:'pong'});
});

module.exports = app;