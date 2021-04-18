import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import AppliedCourse from './AppliedCourse'

function AppliedCourses() {
    const [courses, setCourses]= useState([]);
    const token= sessionStorage.getItem('token');
    const {email}= jwtDecode(token);
    useEffect(()=> {
        fetch('https://vast-bastion-90682.herokuapp.com/myCourses?email='+email)
        .then(res=> res.json())
        .then(data=> setCourses(data))
        .catch(err=> console.log(err));
        return () => {
            setCourses([]);
          };
    }, [email])
    return (
        <div>
            <h5 className="my-green">Your applied courses</h5>
            <div className="courses-wrapper">
                {courses.map(course=> <AppliedCourse key={course._id} courseDB={course}/>)}
            </div>
        </div>
    )
}

export default AppliedCourses
