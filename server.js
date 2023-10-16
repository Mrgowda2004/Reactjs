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

// Define a MongoDB Schema and Model 
const profileSchema = new mongoose.Schema({
  fields: String,
  academic: String,
  career: String,
  fieldsOfStudy: String,
  skill: String,
  specificInterest: String,
});
const Header = mongoose.model('Header', profileSchema);
app.post('/Header', async (req, res) => {
  const { fields, academic, career, fieldsOfStudy, skill, specificInterest } = req.body;

  const newProfile = new Header({
    fields,
    academic,
    career,
    fieldsOfStudy,
    skill,
    specificInterest,
  });

  newProfile.save().then((res)=>{
    console.log('Data saved successfully:', Header);
  }).catch(err=>{
    console.error('Error while saving data:', err);
  })
});


const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  Degree: String,
  feedback: String,
  rating: String,
});
const FeedbackForm = mongoose.model('feedback', feedbackSchema);
app.post('/feedback', async (req, res) => {
  const { name,email,phone,course,Degree,feedback,rating } = req.body;

  const newProfile = new FeedbackForm({
    name,
    email,
    phone,
    course,
    Degree,
    feedback,
    rating,
  });

  newProfile.save().then((res)=>{
    console.log('Data saved successfully:', FeedbackForm);
  }).catch(err=>{
    console.error('Error while saving data:', err);
  })
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
