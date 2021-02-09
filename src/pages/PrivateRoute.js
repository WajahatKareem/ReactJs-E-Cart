//import React, { Children } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
//import { useUserContext } from '../context/user_context';

const PrivateRoute = ({Children, ...rest }) => {
  const { user} =useAuth0()
console.log(Children)
console.log(rest)
  return (
    <Route
      {...rest}
      render={() => {
        return user ? Children : <Redirect to='/'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute;
