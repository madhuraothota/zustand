import React from 'react';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className='main-contianer'>
     <h1 style={{
      fontSize: "2.5rem",
      marginBottom : "2rem"
     }}>
      My Cousrse List
     </h1>
     <CourseForm/>
     <CourseList/>
    </div>
  );
}

export default App;
