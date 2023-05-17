import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TrailsList from '../components/TrailsList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchTrails } from '../http/trailAPI';
import { fetchTechnics } from '../http/technicAPI';
import { fetchTours } from '../http/tourAPI';

const Main = observer(() => {
    const {trail} = useContext(Context) 
    const {tour} = useContext(Context)
    const {technic} = useContext(Context) 

    useEffect(() => {
        fetchTrails().then(data => trail.setTrails(Object.values(data)))
    },[trail])
    useEffect(() => {
        fetchTours().then(data => tour.setTours(Object.values(data)))
    },[tour])
    useEffect(() => {
        fetchTechnics().then(data => technic.setTechnics(Object.values(data)))
    },[technic])

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