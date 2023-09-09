const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user=require('./routes/userRoutes')
const cors=require('cors');

app.use(express.json());
const corsOptions = {
    origin: 'https://frontendrepos.vercel.app', // Replace with the appropriate frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
  app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", user);


module.exports = app;
