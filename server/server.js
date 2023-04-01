const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const corsOption = {
origin: 'http://localhost:8081',
credentials: true
}
app.use(cors(corsOption))


//models
const db = require('./app/models')


//Sequelize
db.connex.sync()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))


//test
app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
    })
//route
    require('./app/routes/product.route')(app)
    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
    })