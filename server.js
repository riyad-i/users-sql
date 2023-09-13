const express = require('express')
const app = express()
const PORT = 4000

const sequelizeDB = require('./utils/db')

app.use(express.json())



app.listen(PORT, async ()=>{
    console.log(`Server running on port: ${PORT}`);

    try {
        sequelizeDB.authenticate()
        console.log('connected');
    } catch (error) {
        console.log(error);
    }

})