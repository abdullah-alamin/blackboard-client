import React, { useEffect, useState } from 'react'

function AllApplications() {
    const [enrolls, setEnrolls]= useState([]);
    
    const handleStatus= (e,_id)=> {
        const status= e.target.value;
        fetch('https://vast-bastion-90682.herokuapp.com/updateStatus',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({status,_id})
        })
    }
    useEffect(()=> {
        fetch('https://vast-bastion-90682.herokuapp.com/allEnrollments')
        .then(res=> res.json())
        .then(data=> setEnrolls(data))
        .catch(err=> console.log(err))
    }, [])
    return (
        <section className="all-applications">
            <h5 className="my-green">All course applications</h5>
            <table className="table mt-3">
                <thead>
                    <tr style={{color: 'salmon'}}>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Course</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {enrolls.map(enroll=> {
                        const {name, email, course, _id, status}= enroll;
                        return(
                    <tr key={_id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{course.title} </td>
                    <td>Credit Card</td>
                    <td  className="status-control">
                        <select onChange={(e)=>handleStatus(e,_id)} name="status" id="" value={status}>
                            <option value="">Select</option>
                            <option value="done">Done</option>
                            <option value="pending">pending</option>
                            <option value="ongoing">ongoing</option>
                        </select>
                    </td>
                    </tr>
                        )
                    })}
                  
                </tbody>
            </table>
        </section>
    )
}

export default AllApplications
