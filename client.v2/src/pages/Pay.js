import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_ROUTE } from '../utils/consts';

const Pay = () => {
    // нужно tour
    const {trail} = useContext(Context)
    const {technic} = useContext(Context)
    const navigate = useNavigate()

    function selectBtnHandle() {
        navigate(SUCCESS_ROUTE)
    }

    return (
        <Container>
            <h1 style={{marginTop: "80px"}}>Ваш заказ</h1>
            <Card 
                key={technic.id}
                style={{width:"50%", height:"50%", paddingRight:30, paddingLeft:30, paddingTop:20, paddingBottom:20}} 
                className="d-flex mt-4"
            >
                <div className='d-flex flex-column'>
                    <h4 className='mt-3'>Маршрут: {trail.selectedTrail.name}</h4>
                    <div className='mt-4'><b>Вертолет:</b> {technic.selectedTechnic.name}</div>
                    <div className='mt-2'><b>Количество человек:</b> {technic.selectedTechnic.contain}</div>
                    {/* <div className='mt-2'><b>Стоимость:</b> {trail.selectedTrail.price}</div> */}
                </div>
            </Card>
            <div style={{maxWidth:"35%"}} className='mt-4'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control type="email" placeholder="Введите email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Ваше ФИО</Form.Label>
                        <Form.Control type="" placeholder="Иванов Иван Иванович" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="" placeholder="+7 (999) 999-99-99" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Дополнительные пожелания" />
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