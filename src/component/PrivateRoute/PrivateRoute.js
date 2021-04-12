import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { checkIsUserLoggedIn } from '../lib/helpers'

const privateRoute = ({ component: Component, user, handleUserLogout, ...rest }) => {
    console.log(user);
    return (
        <Route
            {...rest}
            render={(routerProps) =>
                checkIsUserLoggedIn() ?
                //Profile 
                <Component {...routerProps} handleUserLogout={handleUserLogout}/>
                    :
                <Redirect to="/sign-up" />
            }
        />)
}

export default privateRoute;