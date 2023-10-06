// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors(
  {
    origin: "http://localhost:3000",
  }
));

// MongoDB connection
mongoose.connect('mongodb+srv://mrgowdacr2018:Mrg%409066052004@cluster0.gqhsoos.mongodb.net/Data?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a MongoDB schema and model (you'll need to define a schema based on your data structure)
const userSchema = new mongoose.Schema({
  fields: String,
  academic: String,
  career: String,
  fieldsOfStudy: String,
  skill: String,
  specificInterest: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());

// Define API endpoints
app.get("/", (req, res) => {
  const formData = req.body;
  const newUser = new User(formData);

  newUser.save()
    .then(() => {
      res.json({ message: 'Data saved successfully' });
    })
    .catch((error) => {
      console.error('Error while saving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
