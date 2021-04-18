import React, { useEffect, useState } from 'react'
import Course from './Course'

function Courses() {
    const [courses, setCourses]= useState([]);
    useEffect(()=> {
        fetch('https://vast-bastion-90682.herokuapp.com/allCourses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
        .catch(err=> console.log(err))
    },[])
    return (
        <section className="courses container my-5">
            <h1 className="text-center py-4">Our Courses</h1>
            <div className="courses-row pb-4">
                {
                    courses.map(course=> <Course key={course._id} course= {course}></Course>)
                }
            </div>
        </section>
    )
}

export default Courses
