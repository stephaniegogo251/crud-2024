const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
  res.send('Hello from the other side I must\'ve called a thousand times...');
})

mongoose.connect('mongodb+srv://stephisan25:KVSdXgnN6iVbkyH4@backenddb.f6ak1zi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!')
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection Failed!");
});