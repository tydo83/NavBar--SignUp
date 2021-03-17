import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
            <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
                <p className = "h5 my-0 me-md-auto fw-normal">
                <Link to="/">
                <i className="fas fa-film"></i>
                {/* <p className="h5 my-0 me-md-auto fw-normal">Fullstack Date Movie App with Friends</p> */}
                </Link>
                </p>
                <nav className="my-2 my-md-0 me-md-3">
                    <NavLink exact 
                    // activeStyle={{ color: "red" }} 
                    to="/" 
                    activeClassName="active-class-style">Home</NavLink>
                    <NavLink activeStyle={{ color: "yellow" }} to="/sign-up" className="btn btn-outline-primary">Sign Up</NavLink>
                    <NavLink activeStyle={{ color: "yellow" }} to="/login" className="btn btn-outline-primary">Log In</NavLink>
                </nav>
            </header>
    )
                    
}

export default Navbar
