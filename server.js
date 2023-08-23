const express = require('express');
const mongoose = require('mongoose');
const app = express();
const FormEntry = require('./FormEntry');

const port = 80;

mongoose.connect('mongodb+srv://devharshmangal:harsh786@cluster0.pwltp9k.mongodb.net/UHostel?retryWrites=true&w=majority',
{
    useNewURLParser:true,
    useUnifiedTopology:true
},
console.log('mongodb is running'));
app.use(express.json());

app.post('/api/submit', async (req, res) => {
    try {
      const { name, rollNumber, roomNumber, newPassword } = req.body;
  
      const formEntry = new FormEntry({ name, rollNumber, roomNumber, newPassword });
  
      await formEntry.save();
  
      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

