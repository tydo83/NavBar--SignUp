import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import AuthMovieHome from './component/AuthMovieHome/AuthMovieHome'
import Login from './component/Login/Login'
import SignUp from './component/SignUp/SignUp'
import Navbar from './component/Navbar/Navbar'
import NotFound from './component/NotFound/NotFound'
import PrivateRoute from './component/PrivateRoute/PrivateRoute'
import MovieDetail from './component/AuthMovieHome/MovieDetail'
import Profile from './component/Profile/Profile'
import CreateFriend from './component/CreateFriend/CreateFriend'

const MainRouter = (props) => {
    return (
        <Router>
            {/* <Route exact path="/" component={ Home } />
            <Route exact path="/sign-up" component={ SignUp } /> */}
            <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
            <Switch>
                <PrivateRoute
                    exact path="/movie-home"
                    component={AuthMovieHome}
                />
                <PrivateRoute
                    exact path="/movie-detail/:title"
                    component={MovieDetail}
                />
                <PrivateRoute
                    exact path="/profile"
                    component={Profile}
                    handleUserLogout={props.handleUserLogout}
                />
                <PrivateRoute
                    exact path="/create-friend"
                    component={CreateFriend}
                />
                <Route exact path="/sign-up" component={SignUp} />
                {/* <Route path="/login" component={Login} /> */}
                <Route
                    exact
                    path="/login"
                    // component={login}
                    render={(routerProps) => (
                        <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
                    )}
                />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default MainRouter
