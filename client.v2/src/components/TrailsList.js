import React, { useContext } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import {observer} from "mobx-react-lite"
import TrailItem from './TrailItem';

const TrailsList = observer(() => {
    const {trail} = useContext(Context)

    return (
        <Row className="d-flex">
            {trail.trails.map(trail => 
                <TrailItem key={trail.id} trail={trail}/>
            )}
        </Row>
    );

});
    

export default TrailsList;