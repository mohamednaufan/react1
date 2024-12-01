import React from 'react'
import Titles from './Titles'
import { FaStar } from "react-icons/fa";
import { Container, Row, Col} from 'react-bootstrap';
import Buttons from './Buttons';

function Section3() {
  return (
   <>
   <div className='bgblue' id='scrollspyHeading2'>
   <div className='text-center'>
                <Titles text="About" className="fs-1 fw-bold mt-5 py-3 text-white" />
                 <FaStar className='fs-2 fw-bold text-white' />
             </div>
             <Container>
                <Row className=''>
                    <Col sm={12} lg={2} ></Col>
                    <Col sm={12} md={6} lg={4}>
                    <div className='text-white fs-5 py-5'>
                      <Titles text="Freelancer is a free bootstrap theme"/>
                      <Titles text="created by Start Bootstrap. The"/>
                      <Titles text="download includes the complete source"/>
                      <Titles text="files including HTML, CSS, and"/>
                      <Titles text="JavaScript as well as optional SASS"/>
                      <Titles text="stylesheets for easy customization."/>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                    <div className='text-white fs-5 py-5'>
                    <Titles text="Freelancer is a free bootstrap theme"/>
                      <Titles text="created by Start Bootstrap. The"/>
                      <Titles text="download includes the complete source"/>
                      <Titles text="files including HTML, CSS, and"/>
                      <Titles text="JavaScript as well as optional SASS"/>
                      <Titles text="stylesheets for easy customization."/>
                    </div>
                    </Col>
                    <Col sm={12}lg={2} ></Col>
                </Row>
                <div className=' d-flex justify-content-center align-items-center pb-5'>
                <Buttons text="Free Download!" className="btn btn-outline-success px-4 py-3 text-white bttn"/>
                </div>
             </Container>
   </div>
   </>
  )
}

export default Section3