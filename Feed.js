import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Course from './Course';

const Feed = () => {

  const [courses, setCourses] = useState(initialCourses);

  const handleStatusChange = (courseId, newStatus) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, status: newStatus } : course
      )
    );
  };

  const handleFeedbackSubmit = (courseId, feedback, rating) => {
    console.log(`Submitted feedback for course ${courseId}: ${feedback} (Rating: ${rating})`);
  };

  return (
    <div className="app">
      <header>
        <h1>Course feedback mechanism</h1>
      </header>
      <section className="courses">
        <h2>Courses</h2>
        {}
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            onStatusChange={handleStatusChange}
            onFeedbackSubmit={handleFeedbackSubmit}
          />
        ))}
      </section>
      <section className="preferences">
        <h2>My Preferences</h2>
        {/* Display user preferences here */}
      </section>
      <section className="feedback">
        <h2>Course Feedback</h2>
        {/* Display feedback form here */}
      </section>
      <footer>
        <p>Course feedback mechanism</p>
      </footer>
    </div>
  );
};

const Course = ({ course, onStatusChange, onFeedbackSubmit }) => {
};

ReactDOM.render(<Feed />, document.getElementById('root'));

  