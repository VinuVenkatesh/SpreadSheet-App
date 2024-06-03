//Needed to use .env file
require('dotenv').config(); 
//Import the body parser
const bodyParser = require('body-parser');
//Import the mongoose module
const mongoose = require('mongoose');
// Import the express module
const express=require('express');
//import router function
const router = require('./routes/router');
// Create an instance of the express application
const app=express();
// Start the server and listen to the port
const port = process.env.PORT;

const cors = require('cors');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(
  process.env.MONGODB_URI, 
  {
    dbName: 'RunbookApp',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
