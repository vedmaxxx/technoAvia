import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Container, Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_ROUTE } from '../utils/consts';

const Pay = () => {
    const {tour} = useContext(Context)
    // нужно tour
    const {trail} = useContext(Context)
    const {technic} = useContext(Context)
    const navigate = useNavigate()

    let contain = technic.technics[tour.selectedTour.technicId - 1].contain

    function selectBtnHandle() {
        navigate(SUCCESS_ROUTE)
    }
    function createSelectItems(contain) {
        let items = [];         
        for (let i = 1; i <= contain; i++) {             
             items.push(<option key={i} value={i}>{i}</option>);   
        }
        return items;
    }  

    return (
        <Container>
            <h1 style={{marginTop: "80px"}}>Ваш заказ</h1>
            <Card 
                key={tour.id}
                style={{width:"50%", height:"50%", paddingRight:30, paddingLeft:30, paddingTop:20, paddingBottom:20}} 
                className="d-flex mt-4"
            >
                <div className='d-flex flex-column'>
                    <h4 className='mt-3'>Маршрут: {trail.trails[tour.selectedTour.trailId - 1].name}</h4>
                    <div className='mt-4'><b>Вертолет:</b> {technic.technics[tour.selectedTour.technicId - 1].name}</div>
                    <div className='mt-2'><b>Количество человек:</b> {technic.technics[tour.selectedTour.technicId - 1].contain}</div>
                </div>
            </Card>
            <div style={{maxWidth:"35%"}} className='mt-4'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Сколько человек полетит?</Form.Label>
                        <Form.Select style={{width:200}}>
                            {createSelectItems(contain)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>На какую дату планируете полет?</Form.Label>
                        <Form.Control type='' placeholder="дата..." label="Дополнительные пожелания" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formComment">
                        <Form.Label>Ваши пожелания на полет</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Комментарии..." label="Дополнительные пожелания" />
                    </Form.Group>
                    <Button 
                        variant="primary" type="submit" 
                        className='mt-4' 
                        style={{fontSize:24}}
                        onClick={selectBtnHandle}
                    >
                        Отправить заявку
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Pay;