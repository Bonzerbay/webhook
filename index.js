const express = require('express');
const app = express();


app.post('/webhook', (req, res)=>{

    console.log('payment successful!');
    res.sendStatus(200)
    console.log(req.body);
})

app.listen(3000, ()=> console.log('Connected'));