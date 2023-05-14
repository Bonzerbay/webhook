const express = require('express');
const app = express();

app.use(express.json())
app.post('/webhook', (req, res)=>{

    console.log('payment successful!');
    res.sendStatus(200)
    console.log(req.body);
    console.log(req.body.data.metadata.custom_fields[0]);
    console.log(req.ip);
})

app.listen(3000, ()=> console.log('Connected'));