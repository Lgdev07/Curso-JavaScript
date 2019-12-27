const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando o App
const app = express()
app.use(express.json())
app.user(cors())

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });

requireDir('./src/models')

// const Product = mongoose.model('Product')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)