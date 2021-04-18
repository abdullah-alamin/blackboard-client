import React from 'react'
import { Link } from 'react-router-dom';
import course from '../../images/class-8.jpg'
function Course({course}) {
    const {title, price, instructor, level,imgURL, _id,number}= course;
    return (
        <div className="course">
            <img src={imgURL} alt=""/>
            <div className="p-2 m-2">
                <h5 className=" my-green">{title}</h5>
                <p className="my-large"> <small>Instructor: <span className="instructor-name">{instructor}</span></small> </p>
                <div className="course-level-classes">
                    <p className="my-large"><small>No. of Classes: {number}</small></p>
                    <span className="level">{level}</span>
                </div>
                <div className="course-level-classes">
                  <Link to={"/dashboard/enroll/"+_id}><button className="my-btn">Enroll now</button></Link>
                    <h4>${price}</h4>
                </div>

            </div>
        </div>
    )
}

export default Course
