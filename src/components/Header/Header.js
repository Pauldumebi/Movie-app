import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../../images/Group 1.svg'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="container-fluid">
                <Navbar.Brand href="/"><img src={logo} alt="logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#">TV Episodes</Nav.Link>
                    <Nav.Link href="#">Fans favourites</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link>
                        <Link to="/login" className="login">
                            Sign in
                        </Link>
                        
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/register" className="sign-up">
                            Sign up
                        </Link>
                        
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
