import React, { Component }from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" >contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/todo" className="nav-link" >Todo List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Post" className="nav-link" >Blog</NavLink>
                    </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar