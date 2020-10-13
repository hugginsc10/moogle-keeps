const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys =  require('./config/dev')
const app = express();

// mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true,  useUnifiedTopology: true  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 3000;
app.listen(PORT);