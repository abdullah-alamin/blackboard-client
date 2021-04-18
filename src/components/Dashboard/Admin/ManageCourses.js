import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function ManageCourses() {
    const [courses, setCourses]= useState([]);
    const [deleted, setDeleted]= useState(false);
    useEffect(()=> {
        fetch('https://vast-bastion-90682.herokuapp.com/allCourses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
        .catch(err=> console.log(err))
    },[deleted]);

    const handleDelete= (_id)=> {
        fetch('https://vast-bastion-90682.herokuapp.com/deleteCourse?_id='+_id, {
            method: 'DELETE'
        } )
        .then(res=> res.json())
        .then(suc=> suc && setDeleted(!deleted))
        .catch(err=> console.log(err))
    }
    return (
        //style is the same as all-applications
        <section className="all-applications">
            <h5 className="my-green">Manage courses</h5>
            <table className="table mt-3 ">
                <thead>
                    <tr style={{color: 'salmon'}}>
                        <th scope="col">Name</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Level</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map(course=> {
                            const {_id,title, level, price, instructor}= course;
                            return(
                            <tr key={_id}>
                            <td>{title}</td>
                            <td>{instructor}</td>
                            <td>{level}</td>
                            <td>$ {price}</td>
                            <td>
                                <FontAwesomeIcon style={{color: 'tomato', cursor:'pointer'}} icon={faTrash} onClick={()=>handleDelete(_id)}/>
                            </td>
                            </tr>
                            )
                        })
                    }
                  
                </tbody>
            </table>
        </section>
    )
}

export default ManageCourses
