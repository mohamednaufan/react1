
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Image2 from "../Assets/img2.png";
import Image3 from "../Assets/img3.png";
import Image4 from "../Assets/img4.png";
import Image5 from "../Assets/img5.png";
import Image6 from "../Assets/img6.png";
import Image7 from "../Assets/img7.png";
import Titles from './Titles'
import { FaStar } from "react-icons/fa";

function Section2() {
    return (
        <Container id='scrollspyHeading1'>
             <div className='text-center'>
                <Titles text="PORTFOLIO" className="fs-1 fw-bold mt-5 py-3" />
                 <FaStar className='fs-2 fw-bold' />
             </div>
            <Row className='mt-4'>
                <Col sm={12} md={6} lg={4}>
                    <Image src={Image2} fluid className='py-3' />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Image src={Image3} fluid className='py-3'  />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Image src={Image4} fluid  className='py-3' />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Image src={Image5} fluid  className='py-3' />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4}>
                    <Image src={Image6} fluid  className='py-3' />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Image src={Image7} fluid  className='py-3' />
                </Col>
            </Row>
        </Container>
    );
}

export default Section2;
