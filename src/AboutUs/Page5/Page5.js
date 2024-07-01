import React from 'react'
import './Page5.css'
import Cardd from './Cardd.js'
import { Container, Row, Col } from 'react-bootstrap'



function Page5() {
    return (
        <>
            <Container>

                <Row className='meet-heading'>
                    <Col lg={5} md={7} xs={12} className='meet'>MEET THE</Col>
                    <Col lg={7} md={5} xs={12}></Col>
                </Row>
                <Row className='meet-heading'>
                    <Col lg={4} md={3} xs={12}></Col>
                    <Col lg={8} md={9} xs={12} className='amzing-team'>AMAZING TEAM</Col>
                </Row>
                <Row className='meet-first-row'>
                    <Col md={4}>
                        <Cardd
                            Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407257/vnefmwxciinzvqgraduk.png"
                            tittle="NITESH AGARWAL"
                            button='Founder & CEO'
                        />
                    </Col>
                    <Col md={4} className='card-gap'>
                        <Cardd
                            Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407255/buqrxybbduw0kiuvqxhf.png"
                            tittle="NITESH AGARWAL"
                            button='Sales Manager'
                        />
                    </Col>
                </Row>
                <Row className='meet-last-row'>
                    <Col Col md={4}>
                        <Cardd
                            Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407254/of6dv3jtuipy1qpnlzdj.png"
                            tittle="NITESH AGARWAL"
                            button='Business Consultant'
                        />
                    </Col>
                    <Col Col md={4} className='card-gap'>
                        <Cardd
                            Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407259/k1ghhm5ruuivttpqgpsp.png"
                            tittle="NITESH AGARWAL"
                            button='BDE'
                        />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Page5