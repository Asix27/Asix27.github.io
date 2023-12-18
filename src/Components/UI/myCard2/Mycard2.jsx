import React from 'react';
import { Card, Col, Button } from "react-bootstrap";
import cl from './MyCard.module.css';

function MyCard2({ id, imageUrl, titles, price, text }) {
    return (
        <Col md={3} className={cl.col}>
            <Card className={cl.cardCustom}>
            </Card>
        </Col>
    );
}

export default MyCard2;