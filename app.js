const express = require('express');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');



app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
app.listen(PORT);