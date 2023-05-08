import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
// useHistory в reactrouterdomv6 == useNavigate

// здесь нужно вставить корректно данные по маршруту
const TrailItem = ({trail}) => {
    // для перехода в описание товаров
    // const history = useNavigate()
    return (
        <Col md={12} className={"mt-5 mb-5"}>
                <div className='d-flex justify-content-between'>
                    <div style={{width:700, height:480}} className='d-flex align-items-center'>
                        <Image style={{maxWidth:'100%', height:"auto", maxHeight:"100%", display:'block', objectFit:'cover'}} src={trail.image} />
                    </div>
                    <Card style={{width:500, paddingRight:60, paddingLeft:60, paddingTop:40, paddingBottom:20}} className="ms-5 d-flex flex-column align-items-center">
                        <h2>{trail.name}</h2>
                        <div>
                            <div style={{fontSize: 24, marginTop:30}}><b>Описание:</b>
                            </div>
                            <div style={{fontSize: 18, marginTop:15}}>
                                {trail.description}
                            </div>
                        </div>
                        <div style={{fontSize: 24, marginTop:45}}><b>Время путешествия:</b> {trail.trailtime}ч.</div>
                        <Button style={{width:"80%", fontSize: 20, marginTop:65}}>Выбрать маршрут</Button>
                    </Card>
                </div>
        </Col>
    );
};

export default TrailItem;