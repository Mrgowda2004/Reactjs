import React, { useState } from 'react';
import { Paper } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    course:'',
    Degree:'',
    feedback: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here, e.g., sending the data to a server.
    console.log('Form data:', formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      phone:'',
      course:'',
      Degree:'',
      feedback: ''
    });
  }

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
      <Paper style={{width:'100%',maxWidth:'400px',padding:'20px',border:'1px solid #ccc',borderRadius:'5px',backgroundColor:'#fff',boxShadow:'0 4px 6px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{color:'blue'}}>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label   style={{display:'block',marginBottom:'5px',fontWeight:'bold'}}>Name:  </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label  style={{display:'block',marginBottom:'5px',fontWeight:'bold'}}>phone:  </label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label  style={{display:'block',marginBottom:'5px',fontWeight:'bold'}}>Email:  </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label  style={{display:'block',marginBottom:'5px',fontWeight:'bold'}}>course:  </label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label  style={{display:'block',marginBottom:'5px',fontWeight:'bold'}}>Degree:  </label>
          <input
            type="text"
            name="Degree"
            value={formData.Degree}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'5px',fontWeight:'bold'}}> Course Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
          />
        </div>
        <div>
        <label > Course Feedback by Rating:</label>
        <Stack spacing={1} sx={{alignItems:'center',paddingTop:'5px',paddingBottom:'5px'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
    </div>
        <button type="submit">Submit</button>
      </form>
      </Paper>
    </div>
  );
}

export default FeedbackForm;
