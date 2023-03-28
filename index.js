const express = require('express');
const app = express();


app.post('/webhook', (req, res)=>{

    console.log('payment successful!');
    console.log(req.body);
    res.sendStatus(200)
})

app.listen(3000, ()=> console.log('Connected'));