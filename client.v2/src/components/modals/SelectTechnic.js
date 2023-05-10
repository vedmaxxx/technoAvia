import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button, Card, Image } from 'react-bootstrap';
import { Context } from '../..';

const SelectTechnic = ({show, onHide}) => {
    const {technic} = useContext(Context)
    const [text, isActive] = useState("Выбрать")

    function selectBtnHandle() {
        technic.setSelectedTechnic(technic)
        isActive((text) => text="Выбрано")
    }

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
                    {technic.technics.map(technic => 
                        <div className='mb-3 d-flex flex-row justify-content-between'>
                            <Card 
                                key={technic.id}
                                style={{width:"80%", height:"50%", paddingRight:30, paddingLeft:30, paddingTop:20, paddingBottom:20}} 
                                className="d-flex align-items-center"
                            >
                                <div 
                                    className='d-flex align-items-center'
                                    style={{width:""}} 
                                >
                                    
                                    <div 
                                        className='mt-3 mb-2'
                                        style={{fontSize:22, width:"60%"}}
                                    >
                                        <Image
                                            src={technic.image}
                                            style={{maxWidth:"90%", height:"auto", maxHeight:"100%", display:'block', objectFit:'cover'}} 
                                        />
                                        <div className='mt-2'><b>Вертолет:</b> {technic.name}</div>
                                    </div>
                                    <div style={{fontSize:18}}>
                                        <div><b>Вместимость:</b> {technic.contain} человек</div>
                                        <div><b>Максимальное время полета:</b> {technic.maxTimeOn}</div>
                                    </div>
                                </div>
                            </Card>
                            <div className='d-flex align-items-center pe-2'>
                                <Button className='btn-lg' onClick={() => selectBtnHandle()}>Выбрать</Button>
                            </div>
                        </div>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{fontSize:24, width:"23%"}} variant="outline-danger" onClick={onHide}>Закрыть</Button>
                {/* <Button variant="outline-success" onClick={onHide}>Выбрать</Button> */}
            </Modal.Footer>
        </Modal>
    )
};

export default SelectTechnic;