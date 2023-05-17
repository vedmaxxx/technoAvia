import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TrailsList from '../components/TrailsList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchTrails } from '../http/trailAPI';

const Main = observer(() => {
    const {trail} = useContext(Context) 

    useEffect(() => {
        fetchTrails().then(data => trail.setTrails(Object.values(data)))
    },[trail])

    return (
        <Container>
            <div style={{marginTop: "80px"}}>
                <h1>Выберите маршрут</h1>
            </div>

            <TrailsList/>

            <div style={{height: "200px"}}></div>
        </Container>
    );
});

export default Main;