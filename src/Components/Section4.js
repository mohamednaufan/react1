import React from 'react'
import { Container, Row, Col, InputGroup } from 'react-bootstrap'
import Titles from './Titles'
import { FaStar } from "react-icons/fa";
import Buttons from './Buttons';

function Section4() {
    return (
        <>
            <Container id='scrollspyHeading3'>
                <div className='text-center py-5'>
                    <Titles text="Contact Me" className="fs-1 fw-bold" />
                    <FaStar className='fs-2 fw-bold' />
                </div>
                <Row>
                    <Col sm={12} md={6} lg={3}></Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className='d-flex flex-column'>
                            <input type='text' placeholder='Full Name' className="py-4 my-2 fs-4 b-bottom" />
                            <input type='email' placeholder='E mail address' className="py-4 my-2 fs-4 b-bottom"  />
                            <input type='number' placeholder='Phone number'  className="py-4 my-2 fs-4 b-bottom" />
                            <input type='message' placeholder='Meesage' className="py-4 my-2 fs-4 b-bottom"  />
                            <div>
                            <Buttons text="Send" className="btn bg-success px-4 my-2 text-white"/>
                            </div>

                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Section4