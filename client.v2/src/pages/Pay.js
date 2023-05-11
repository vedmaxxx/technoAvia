import React, { useContext } from 'react';
import { Context } from '..';
import { Container } from 'react-bootstrap';

const Pay = () => {
    const {trail} = useContext(Context)
    const {technic} = useContext(Context)

    console.log(trail.selectedTrail.name)
    console.log(technic.selectedTechnic.name)
    return (
        <Container>
            <div>
                {trail.selectedTrail.name}
                {technic.selectedTechnic.name}
                {technic.selectedTechnic.contain}
            </div>
        </Container>
    );
};

export default Pay;