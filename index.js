const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 8080;
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cachee = require('./routes/CacheRoutes')
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Levon Assignments');
});

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cachee', cachee);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})
