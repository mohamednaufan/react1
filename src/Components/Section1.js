import React from 'react'
import { Container } from 'react-bootstrap'
import Titles from './Titles'
import { Image } from 'react-bootstrap';
import Image1 from "../Assets/img1.svg";
import { FaStar } from "react-icons/fa";

function Section1() {
    return (
        <>

            <div className='bgblue mtclass'>
                <Container>
                    <div className=''>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <Image src={Image1} className='w-25' fluid />
                        </div>
                        <div className='text-center py-4'>
                            <Titles text="START BOOTSTRAP" className="text-white fs-1 fw-bold" />
                            <FaStar className='text-white fs-2 fw-bold my-2' />
                            <Titles text="Graphic Artist - Web Designer - Illustrator " className="fs-5 text-white" />
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Section1

{/*

   
  
    margintop */}