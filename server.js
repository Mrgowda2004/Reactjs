// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/Header', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/api/feedback', (req, res) => {
  const { name, email, feedback } = req.body;
  const newFeedback = new Feedback({ name, email, feedback });
  
  newFeedback.save((err, savedFeedback) => {
    if (err) {
      console.error('Error saving feedback:', err);
      return res.status(500).json({ error: 'Failed to save feedback' });
    }
    res.status(201).json(savedFeedback);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
