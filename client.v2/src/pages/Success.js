import React from 'react';
import { Container } from 'react-bootstrap';

const Success = () => {
    return (
        <Container className='mt-5'>
            <h1>Готово!</h1>
            <div style={{fontSize:24}}>Ваша заявка отправлена и вскоре будет рассмотрена администратором.</div>
        </Container>
    );
};

export default Success;