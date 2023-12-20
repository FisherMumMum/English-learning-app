
const express = require('express')
const app = express()

app.get('/',(reg,res)=>{
    res.send('Hello cac ban!')
})

app.listen(3000, () => console.log('Its working on port 3000'))