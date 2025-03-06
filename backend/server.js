const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(cors()); 

app.get('/',(req, res)=>{
    res.send("API Working")
})

app.get('/api/greet', (req, res)=>{
    const{name} = req.query;
    if(!name){
       return res.json({ "message":"Name is required."});
    }
     res.json({"message":`Hello ${name}! Welcome to Youngslab.`});
    
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})