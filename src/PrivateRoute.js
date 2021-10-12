import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({components: Component, ...rest}) => {
  const {isAuth} = useSelector(s => s.user)
  return (
    <Route {...rest}
           render={(props) => {
             if (isAuth) {
               return <Component/>
             } else {
               return <Redirect to={{
                 pathname: "/login",
                 state: {from: props.location}
               }}/>
             }
           }}
    />
  );
}

export default PrivateRoute;