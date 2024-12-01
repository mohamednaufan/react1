import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navs() {
  return (
    <>

    <Navbar expand="lg" className="bgdark fixed-top">
      <Container>
        <Navbar.Brand href="#home" className='text-white fs-4 fw-bold'>Start Bootstrap</Navbar.Brand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link href="#scrollspyHeading1"  className='text-white navvbtn  fw-bold'>PORTFOLIO</Nav.Link>
            <Nav.Link href="#scrollspyHeading2" className='text-white navvbtn  fw-bold'>ABOUT</Nav.Link>
            <Nav.Link href="#scrollspyHeading3" className='text-white navvbtn  fw-bold'>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navs