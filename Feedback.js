import React, { useState } from 'react';
import { Button, Rating, TextField, Typography } from '@mui/material';
import { Paper } from '@mui/material';

const Feedback= () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission of rating and comment (e.g., send to server/database).
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <Paper sx={{padding: '32px'}}>
    <div>
      <Typography variant="h5">Course  feedback </Typography>
      {/* Display the code snippet here */}
      <pre>
        <code>{/* Your code snippet goes here */}</code>
      </pre>
      <Typography variant="h6">Rate and Review:</Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={handleRatingChange}
        precision={0.5} // Customize based on your requirements
      />
      <TextField
        multiline
        rows={4}
        variant="outlined"
        label="Leave a comment"
        value={comment}
        onChange={handleCommentChange}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
    </Paper>
  );
};

export default Feedback;
