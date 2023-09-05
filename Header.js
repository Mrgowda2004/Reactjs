import React, { Component } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: '',
      academic: '',
      career: '',
      fieldsOfStudy: '',
      skill: '',
      specificInterest: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Paper sx={{padding: '32px'}}>
      <div className="container">
        <h1>User Profile</h1>
        <form id="profileForm" onSubmit={this.handleSubmit}>
          <label htmlFor="fields">Areas of Interest:</label>
          <select
            id="fields"
            name="fields"
            value={this.state.fields}
            onChange={this.handleInputChange}
          >
            <option value="">Select your Area of Interest</option>
            <option value="Area">Programer</option>
            <option value="Photography">Photography</option>
            <option value="arts">Arts</option>
            <option value="engineering">engineering</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Management">Management</option>
            <option value="Time Manegement">Time Manegement</option>
             <option value="Biology">Biology</option>
            <option value="Sociology">Sociology</option>
            <option value="Gardering">Gardering</option>
            {/* Add more options here */}
          </select>

          <label htmlFor="academic">Academic Background:</label>
          <select
            id="academic"
            name="academic"
            value={this.state.academic}
            onChange={this.handleInputChange}
          >
            <option value="">Select your Academic Background</option>
            <option value="SSLC">SSLC</option>
            <option value="PUC">PUC</option>
            <option value="Diploma">Diploma</option>
            <option value="BA">BA</option>
            <option value="Bcom">Bcom</option>
            <option value="BSc">BSc</option>
            <option value="Bsc(cs)">Bsc(cs)</option>
            <option value="BCA">BCA</option>
            <option value="MA">MA</option>
            <option value="MCOM">Mcom</option>
            <option value="MSC">Msc</option>
            <option value="aMBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="NURSING">Nursing</option>
            <option value="aBSCA">Bsc(Agri)</option>
            <option value="MEDICAL">Medical</option>
            {/* Add more options here */}
          </select>

          <label htmlFor="career">Career Goals:</label>
          <select
            id="career"
            name="career"
            value={this.state.career}
            onChange={this.handleInputChange}
          >
            <option value="">Select your Career Goals</option>
            <option value="lea">Leadership</option>
            <option value="dev">Development</option>
            <option value="edu">Education</option>
            <option value="pro">Productivity</option>
            <option value="doc">Doctor</option>
            <option value="eff">Efficiency</option>
            <option value="polr">Political</option>
            <option value="cre">Research</option>
            {/* Add more options here */}
            </select>

          <label htmlFor="fieldsOfStudy">Fields of Study:</label>
          <textarea
            id="fieldsOfStudy"
            name="fieldsOfStudy"
            value={this.state.fieldsOfStudy}
            onChange={this.handleInputChange}
            rows="4"
          ></textarea>

          <label htmlFor="skill">Skill Levels:</label>
          <select
            id="skill"
            name="skill"
            value={this.state.skill}
            onChange={this.handleInputChange}
          >
            <option value="">Select your Skill Level</option>
            <option value="skil1">Novice</option>
            <option value="skil2">Advanced Beginner</option>
            <option value="skil3">Competence</option>
            <option value="skil4">Proficient</option>
            <option value="skil5">Expert</option>
            {/* Add more options here */}
            </select>

          <label htmlFor="specificInterest">Specific Areas of Interest:</label>
          <textarea
            id="specificInterest"
            name="specificInterest"
            value={this.state.specificInterest}
            onChange={this.handleInputChange}
            rows="4"
          ></textarea>

          <div className="button">
            <button type="submit" >SUBMIT</button>
          </div>
        </form>
      </div>
      </Paper>
    );
  }
}

export default Header;
