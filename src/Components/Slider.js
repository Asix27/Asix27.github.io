import React from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import cafe1 from '../assets/img/cafe1.jpeg'
import cafe2 from '../assets/img/cafe2.jpeg'
import cafe3 from '../assets/img/cafe3.jpg'

const Slider = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item style={{height: '600px'}}>
                <img
                    className='d-block w-100'
                    src={cafe1}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>MEDINA</h3>
                    <p>Место куда хочется возвращаться</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: '600px'}}>
                <img
                    className='d-block w-100'
                    src={cafe2}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>MEDINA</h3>
                    <p>Место куда хочется возвращаться</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: '600px'}}>
                <img
                    className='d-block w-100'
                    src={cafe3}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>MEDINA</h3>
                    <p>Место куда хочется возвращаться</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container fluid style={{ backgroundColor: '#192930', height: 3}}>
            <Row>
                <Col style={{color: 'black' , display: 'flex', justifyContent: 'center', padding: '10px' }}>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Slider;