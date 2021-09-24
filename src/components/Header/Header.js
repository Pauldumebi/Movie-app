import {Nav, Navbar} from 'react-bootstrap'
import logo from '../../images/Group 1.svg'
import './Header.css'

const Header = () => {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="container-fluid">
                <Navbar.Brand href="/movie-app"><img src={logo} alt="logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="font-weight-bold pr-5 welcome">Welcome</Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
