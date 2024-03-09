const express=require('express')
const app= express()
const cors=require('cors')
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(cors())
app.use(express.json())

app.listen(3000,()=>{
    console.log('Server is running on port 3800')
})
app.use(require('./routes'))
