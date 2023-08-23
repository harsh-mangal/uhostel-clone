const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env =0;
const port = 5000;
mongoose.connect('mongodb+srv://devharshmangal:harsh786@cluster0.pwltp9k.mongodb.net/UHostel?retryWrites=true&w=majority',
console.log('mongodb is running'));
app.listen(port , console.log('server listening on port ' + port));
