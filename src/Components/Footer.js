import React from 'react'
import Titles from './Titles'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className='bgprimary p-5 mt-5'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} className='mt-4'>
                            <div className='text-white'>
                                <Titles text="Location" className="fs-3 fw-bold text-center" />
                                <Titles text="2215 John Daniel Drive" className="fs-5 text-center mt-3" />
                                <Titles text="Clark, MO 65243" className="fs-5 text-center" />
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-4'>
                            <div className='text-white'>
                                <Titles text="Around the Web" className="fs-3 fw-bold text-center" />
                                <div className='d-flex gap-4 py-4  justify-content-center'>
                                    <FaFacebookF className='fs-4 boordercircle' />
                                    <FaTwitter className='fs-4 boordercircle ' />
                                    <FaLinkedinIn className='fs-4 boordercircle' />
                                    <FaFirefoxBrowser className='fs-4 boordercircle' />
                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-4'>
                            <div className='text-white'>
                                <Titles text="About Freelancer" className="fs-3 fw-bold text-center" />
                                <Titles text="Freelance is a free to use, MIT" className="fs-5 text-center mt-3" />
                                <Titles text="licensed Bootstrap theme created" className="fs-5 text-center" />
                                <Titles text="By" anger="start bootstrap." classNames="text-decoration-none text-success fs-4" className="fs-5 text-center" />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className='bgdark'>
                <Titles text="Copyright © Your Website 2023" className="text-white text-center p-3" />
            </div>
        </>
    )
}

export default Footer