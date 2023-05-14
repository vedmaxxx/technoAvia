import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import TechnicItem from './TechnicItem';
import TourItem from './TourItem';
import NotExist from './NotExist';

const SelectTour = ({show, onHide}) => {
    const {tour} = useContext(Context)
    const {trail} = useContext(Context)

    // tour === trails[0]
    function getTourByTrailId(tour) {
        if (tour && tour.trailId === trail.selectedTrail.id)
            return <TourItem key={tour.id} tour={tour} />
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title 
                    id="contained-modal-title-vcenter" 
                    style={{marginLeft:30, fontSize:30}}
                >
                    Выберите тур
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column ms-5 me-5'>
                    {tour.tours.map(tour => getTourByTrailId(tour))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{fontSize:24, width:"23%"}} variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default SelectTour;