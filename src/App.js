import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import React,{ useEffect, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute';
export const UserContext= React.createContext();
function App() {
  // setting up the login 
  const [userToken, setUserToken]= useState(null);
  useEffect(()=> {
    const token= sessionStorage.getItem('token');
    token && setUserToken(token); 
  }, [])


  return (
    <UserContext.Provider value={{userToken,setUserToken}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
