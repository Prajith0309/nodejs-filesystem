const express = require('express')
const fs = require('fs')
const app = express()

app.get('/timestamp',(req,res)=>{
    const timestamp = new Date().toLocaleString();
    
    const callback = (err) => {
        if (err){
            res.send(err);
        }else{
            res.send(`current date time: ${timestamp}`);
        }
    }
    fs.appendFile('current date time.txt', timestamp, callback);
})

const port = process.env.PORT || 3001
app.listen(port,()=>{console.log(`running in ${port}`)})