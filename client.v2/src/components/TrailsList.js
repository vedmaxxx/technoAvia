import React, { useContext } from 'react';
import { Context } from "../index";
import { Row } from 'react-bootstrap';
import {observer} from "mobx-react-lite"
import TrailItem from './TrailItem';
import { Button } from 'react-bootstrap';

const TrailsList = observer(() => {
    const {trail} = useContext(Context)
    console.log(trail.selectedTrail)
    
    return (
        <Row className="d-flex">
            {trail.trails.map(trail =>
                <TrailItem 
                    // active={trail.id === trail.selectedTrail.id}
                    key={trail.id} 
                    trail={trail}
                />
            )}
        </Row>
    );

});
    

export default TrailsList;