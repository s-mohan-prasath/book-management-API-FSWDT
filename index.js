const express = require('express');
const app = express();
const port = 8081;//http://localhost:8081

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Server is running'
    })
})
app.get('*',(req,res)=>{
    res.status(404).json({
        message:'Route does not exist'
    })
})


app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})