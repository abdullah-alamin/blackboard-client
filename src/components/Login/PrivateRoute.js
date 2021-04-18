import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App'

function PrivateRoute({ children, ...rest }) {
    const {userToken}= useContext(UserContext);
    const token= sessionStorage.getItem('token');
   
    return (
        <Route
        {...rest}
        render={({ location }) =>
          userToken || token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}

export default PrivateRoute
