const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json()); //use express json for rest api json requests
app.use(cors())
const PORT = 4444; //assign PORT to 4444
console.log("ebubekir")

// controller imports
const homeController = require('./controllers/home');
const loginController = require('./controllers/login');

app.get('/', homeController);
app.post('/login', loginController);


// start server
app.listen(PORT, function () {
    console.log(`App is running on ${PORT}`)
})