import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button, Card, Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Context } from '../..';

const SelectTechnic = ({show, onHide}) => {
    const {technic} = useContext(Context)
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
                <div className='d-flex flex-column'>
                    {technic.technics.map(technic => 
                        <Card 
                            key={technic.id}
                            style={{width:500}} 
                            className=" d-flex align-items-center"
                        >
                            {/* <Image src={technic.image}></Image>
                             */}
                             <Image src="../../images/helicopters/sponsor-05.jpg"/>
                            <div>{technic.name}</div>
                            <div>{technic.contain}</div>
                            <div>{technic.maxTimeOn}</div>
                        </Card>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Выбрать</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default SelectTechnic;