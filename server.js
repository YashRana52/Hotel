const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const menuRoutes = require('./routes/menuRoutes')
app.use('/menu',menuRoutes);
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);


app.get('/', function(req, res) {
  res.send('welcome to my hotel, how can I help you');
});

//post methode for menu



app.listen(3000, () => {
  console.log('Listening on port 3000');
});
