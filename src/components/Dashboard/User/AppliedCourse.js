import React from 'react'
import image from '../../../images/class-8.jpg'
function AppliedCourse({courseDB}) {
    const {course, status}= courseDB;
    return (
        <div className="applied-course">
            <div className="course-img-stat">
                <img style={{height: '70px'}} src={course.imgURL} alt=""/>
               <p><span className="course-status">{status}</span></p> 
            </div>
            <h5 className="mt-2">{course.title}</h5>
            <p>{course.description}</p>
        </div>
    )
}

export default AppliedCourse
