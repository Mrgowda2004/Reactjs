const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb+srv://mrgowdacr2018:Mrg%409066052004@cluster0.gqhsoos.mongodb.net/Data?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define a MongoDB Schema and Model (e.g., Profile)
const profileSchema = new mongoose.Schema({
  fields: String,
  academic: String,
  career: String,
  fieldsOfStudy: String,
  skill: String,
  specificInterest: String,
});
const Profile = mongoose.model('Profile', profileSchema);
app.post('/register', async (req, res) => {
  const { fields, academic, career, fieldsOfStudy, skill, specificInterest } = req.body;

  const newProfile = new Profile({
    fields,
    academic,
    career,
    fieldsOfStudy,
    skill,
    specificInterest,
  });

  newProfile.save((err, profile) => {
    if (err) {
      console.error('Error while saving data:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Data saved successfully:', profile);
      res.status(200).json({ message: 'Data saved successfully' });
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

