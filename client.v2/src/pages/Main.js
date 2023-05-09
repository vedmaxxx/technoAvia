import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TrailsList from '../components/TrailsList';

const Main = () => {
    
    return (
        <Container>
            <div style={{marginTop: "80px"}}>
                <h1>Выберите маршрут</h1>
            </div>

            <TrailsList/>

            <div style={{height: "300px"}}></div>
        </Container>
    );
};

export default Main;