import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
// useHistory в reactrouterdomv6 == useNavigate

// здесь нужно вставить корректно данные по маршруту
const TrailItem = ({trail}) => {
    // для перехода в описание товаров
    // const history = useNavigate()
    return (
        <Col md={3} className={"mt-3"}>
            <Card style ={ {width:150, cursor:'pointer'} } border={"light"}> 
                <Image width={150} height={150} src={trail.image}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{trail.name}</div>
                    <div>Время: {trail.trailtime}ч.</div>
                </div>
            </Card>
        </Col>
    );
};

export default TrailItem;