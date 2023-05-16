import React, { useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [password, setPassword] = useState('')
    


    const click = async () => {
        if (isLogin) {
            const response = await login(phonenumber, password)
            console.log(response)
        } else {
            const response = await registration(phonenumber, password, name, surname)
            console.log(response)
        } 
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width:600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"} </h2>
                <Form className="d-flex flex-column">
                    {
                        !isLogin ? 
                        <Form.Control
                        className="mt-2"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        /> 
                        :
                        ''
                    }
                    {
                        !isLogin ? 
                        <Form.Control
                        className="mt-2"
                        placeholder="Ваша фамилия"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        /> 
                        :
                        ''
                    }
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш email..."
                        value={phonenumber}
                        onChange={e => setPhonenumber(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        
                        <Button 
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>

        </Container>
    );
};

export default Auth;