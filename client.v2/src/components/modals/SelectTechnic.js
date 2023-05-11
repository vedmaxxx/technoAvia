import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button, Card, Image } from 'react-bootstrap';
import { Context } from '../..';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import TechnicItem from './TechnicItem';

const SelectTechnic = ({show, onHide}) => {
    const {technic : technicContext} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title 
                    id="contained-modal-title-vcenter" 
                    style={{marginLeft:30, fontSize:30}}
                >
                    Выберите вертолет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='pe-3 ps-3 d-flex flex-column'>
                    {technicContext.technics.map(technic => 
                        <TechnicItem technic={technic}/>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{fontSize:24, width:"23%"}} variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default SelectTechnic;