import React,{useState} from 'react'

import useCourseStore from '../app/storeCourse';

const CourseForm = () => {
    const addCourse = useCourseStore((state) =>state.addCourse)

    const [courseTitle,setCourseTitle] = useState("");
    console.log("course form rendered");

    const handleCourseSubmit = () => {
        if(!courseTitle) return alert("please add course title");
        addCourse( {
            id: Math.ceil(Math.random() *1000000),
            title:courseTitle
        })
        setCourseTitle("");
    }
  return (
    <div className='form-contianer'>
        <input 
        value={courseTitle}
        onChange={(e) =>{
            setCourseTitle(e.target.value);
        }}
        className='form-input'/>
        <button
        onClick={() => {
            handleCourseSubmit();
        }}
         >addCourse</button>       
        
    </div>
  )
}

export default CourseForm;