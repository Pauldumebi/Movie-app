import {Nav, Navbar} from 'react-bootstrap'
import logo from '../../images/Star_Wars-Logo.wine.png'
import './Header.css'

const Header = () => {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="container-fluid">
                <Navbar.Brand href="/"><img style={{width: "6rem"}} src={logo} alt="logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="font-weight-bold pr-5">Welcome</Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
