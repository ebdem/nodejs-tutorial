const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); //use express json for rest api json requests
app.use(cors())
const PORT = 4444; //assign PORT to 4444
console.log("ebubekir");

// controller imports
const homeController = require('./controllers/home');
const loginController = require('./controllers/login');
const registrationController = require('./controllers/registration');

app.get('/', homeController);
app.post('/login', loginController);
app.post('/registration', registrationController);


// start server
app.listen(PORT, function () {
    console.log(`App is running on ${PORT}`)
})