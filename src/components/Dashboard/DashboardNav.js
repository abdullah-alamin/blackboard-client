import { faCog, faComment, faCopy, faFolder, faPencilRuler, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import enroll from '../../images/enroll.png'


function DashboardNav({isAdmin}) {
    
    return (
        <>
        <Link to="/"><h2 className="my-green">BlackBoard</h2></Link> 
        <ul>
           {
               !isAdmin? 
               <>
               <li>
                   <Link to="/dashboard/enroll"><img src={enroll} alt=""/>  Enroll</Link>
               </li>
               <li>
                   <Link to="/dashboard/mycourses"> <FontAwesomeIcon icon={faCopy}/> Courses Applied</Link>
               </li>
               <li>
                   <Link to="/dashboard/review"> <FontAwesomeIcon icon={faComment}/> Review</Link>
               </li>
                </>:<>
           <li>
                <Link to="/dashboard/admin/applications"> <FontAwesomeIcon icon={faFolder}/> All Applications</Link>
            </li>
            <li>
                <Link to="/dashboard/admin/newCourse"> <FontAwesomeIcon icon={faPencilRuler}/> Add New Course</Link>
            </li>
            <li>
                <Link to="/dashboard/admin/addAdmin"> <FontAwesomeIcon icon={faUserShield}/> Add Admin</Link>
            </li>
            <li>
                <Link to="/dashboard/admin/manage"> <FontAwesomeIcon icon={faCog}/> Manage Courses</Link>
            </li>
            </>}
        </ul>
        </>
    )
}

export default DashboardNav
