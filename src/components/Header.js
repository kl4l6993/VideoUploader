import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={{backgroundImage:"url("+'https://i.postimg.cc/1ztrgHPK/header.jpg'+")",backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width:'100%'}}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Link to={"/"} style={{textDecoration:'none'}}>
                        <Navbar.Brand className='text-white me-5'><img
                            alt=""
                            src="https://i.postimg.cc/CxHYXMpt/play-button-icon-png-18909.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}VIDEO UPLOADER</Navbar.Brand>
    
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li"><Nav.Link href="#features" className='ms-3 text-white'>HOME</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="#pricing" className='ms-3 text-white'>ABOUT</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="#pricing" className='ms-3 text-white'>SERVICES</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="#pricing" className='ms-3 text-white'>CONTACT</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav className='border-start ms-auto'>
                            <Nav.Link href="#deets" className='ms-2' ><i className="fa-brands fa-facebook fa-shake fa-xl text-info"></i></Nav.Link>
                            <Nav.Link href="#deets" className='ms-2'><i className="fa-brands fa-youtube fa-xl text-primary"></i></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='ms-2'>
                            <i className="fa-brands fa-instagram fa-xl text-warning"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header