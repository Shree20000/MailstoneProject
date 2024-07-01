import React from 'react'
import './Page2.css';
import { Container, Row, Col, Image } from 'react-bootstrap';


function Page2() {
    return (
        <>
            <Container fluid className='story-container'>
                <div className='story-dottedline1'></div>
                <div className='story-dottedline2'></div>

                <div className='story-content'>
                    <Row className='aboutus-page2-heading row-gap'>OUR STORY</Row>
                    <Row className='row-gap'>
                        <Col md='5' xl='5' lg='5' xs='12' className='aboutus-page2-img-col' >
                            <Image src='https://res.cloudinary.com/drny4cbec/image/upload/v1719315397/o0tp6y9gphir6beqgda1.png' className='aboutus-page2-img' />
                        </Col>
                        <Col className='aboutus-page2-para' md='7' xl='7' lg='7' >At Mailstone, we recognize that every step in your construction and renovation journey is a significant decision. That's why we're here to support you at every stage, from initial planning to final completion. Our team of professionals is committed to delivering expert guidance, industry insights, and solutions that perfectly match your unique requirements.</Col>
                    </Row>
                    <Row className='row-gap'>
                        <Col className='aboutus-page2-para' md='7' xl='7' >
                            What sets Mailstone apart is our unwavering commitment to customer satisfaction. We believe that our success is directly linked to your satisfaction. Therefore, we consistently strive to meet or exceed your expectations, ensuring a seamless and fulfilling experience for all your exterior and interior needs.
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Page2;