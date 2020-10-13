const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys =  require('./config/keys')
const app = express();

mongoose.connect(keys.mongoURI);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
app.listen(PORT);