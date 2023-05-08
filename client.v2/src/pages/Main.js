import React from 'react';
import { Col,  Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import TrailsList from '../components/TrailsList';

const Main = () => {
    return (
        <Container>
            <h1>Выберите маршрут</h1>
            <Row>
                <Col md={15}>
                    <TrailsList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;