import {useEffect, useState} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../../images/Group 1.svg'
import './Header.css'
import {Link, useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    const [loggedIn, setloggedIn] = useState()

    //Check if User is logged in to get name
    useEffect(() => {
        const name = JSON.parse(localStorage.getItem('name'));
        setloggedIn(name)
    }, [])

    //Clear username from local storage
    const logOut = () => {
        localStorage.setItem('name', JSON.stringify(""));
        history.push("/")
    }
    
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
                    {loggedIn ? 
                        <Nav>
                            <Nav className="font-weight-bold pr-5 welcome">Welcome {loggedIn}</Nav>
                            <Nav.Link>
                                <Link to="/" className="sign-up" onClick={()=>logOut()}>
                                    Log out
                                </Link>
                                
                            </Nav.Link>
                        </Nav>  
                        :
                        <Nav>
                            <Nav.Link>
                                <Link to="/login" className="login">
                                    Login
                                </Link>
                                
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/register" className="sign-up">
                                    Sign up
                                </Link>
                                
                            </Nav.Link>
                        </Nav>
                    }
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
