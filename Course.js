// src/components/CourseSuggestions.js
import React from 'react';
import './Course.css'; // Import your CSS file

const courses = [
  {
    id: 1,
    title: 'Machine Learning Fundamentals',
    description: 'Learn the basics of machine learning algorithms and concepts.',
    duration: '6 weeks',
    online: true,
  },
  {
    id: 2,
    title: 'Advanced Data Analysis',
    description: 'Master advanced techniques for data analysis and visualization.',
    duration: '8 weeks',
    online: false,
  },
  // Add more course objects here
];

const Course = () => {
  return (
    <div className="course-suggestions">
      <h2>Personalized Course Suggestions</h2>
      <div className="course-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>{course.online ? 'Online' : 'Offline'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
