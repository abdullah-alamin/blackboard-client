import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import AddAdmin from './Admin/AddAdmin'
import AddCourse from './Admin/AddCourse'
import AllApplications from './Admin/AllApplications'
import ManageCourses from './Admin/ManageCourses'
import DashboardNav from './DashboardNav'
import AppliedCourses from './User/AppliedCourses'
import Enroll from './User/Enroll'
import EnrollMessage from './User/EnrollMessage'
import Review from './User/Review'
function Dashboard() {
    const token = sessionStorage.getItem('token');
    const {email}= jwtDecode(token);
    const [isAdmin, setIsAdmin]= useState(false);
    useEffect(()=> {
        fetch('http://localhost:3001/checkAdmin?email='+email)
        .then(res=> res.json())
        .then(suc=> setIsAdmin(suc))
        .catch(err=> console.log(err))
    },[])
    return (
        <section className="dashboard">
            <div className="slide">
                <DashboardNav isAdmin={isAdmin}></DashboardNav>
            </div>
            <div className="dashboard-main">
            <Switch>
                <Route exact path="/dashboard">
                    {
                    isAdmin?<AllApplications/>:<AppliedCourses/>
                    }
                    
                </Route>
                <Route path="/dashboard/enroll/:_id">
                    <Enroll></Enroll>
                </Route>
                <Route path="/dashboard/enroll">
                    <EnrollMessage></EnrollMessage>
                </Route>
                <Route path="/dashboard/mycourses">
                    <AppliedCourses></AppliedCourses>
                </Route>
                <Route path="/dashboard/review">
                    <Review></Review>
                </Route>
                <Route path="/dashboard/admin/applications">
                    <AllApplications></AllApplications>
                </Route>
                <Route path="/dashboard/admin/newCourse">
                    <AddCourse></AddCourse>
                </Route>
                <Route path="/dashboard/admin/addAdmin">
                    <AddAdmin></AddAdmin>
                </Route>
                <Route path="/dashboard/admin/manage">
                    <ManageCourses></ManageCourses>
                </Route>
                
            </Switch>
            </div>
        </section>
    )
}

export default Dashboard
