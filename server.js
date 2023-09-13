const express = require('express')
const app = express()
const PORT = 4000

const sequelizeDB = require('./utils/db')
const User = require('./models/User')

app.use(express.json());


//Routes



// create
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
});











(async function() {
    try {
        //sync function will create a table for each of our models
        const result = await sequelizeDB.sync()
        console.log(result);

        //run server
        app.listen(PORT, ()=> {`Server running on port: ${PORT}`})
    } catch (error) {
        console.log(error);
    }
})()



// app.listen(PORT, async ()=>{
//     console.log(`Server running on port: ${PORT}`);

//     try {
//         sequelizeDB.authenticate()
//         console.log('connected');
//     } catch (error) {
//         console.log(error);
//     }

// })