import React, { useContext, useState } from 'react';
import { Card, Col, Image} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Context } from '../..';
import { PAY_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

// useHistory в reactrouterdomv6 == useNavigate

// здесь нужно вставить корректно данные по маршруту
const TechnicItem = ({technic}) => {
    // const [technicVisible, setTechnicVisible] = useState(false)
    const {technic : technicContext} = useContext(Context)
    const navigate = useNavigate()

    function selectBtnHandle() {
        technicContext.setSelectedTechnic(technic)
        navigate(PAY_ROUTE)
    }
    
    return (
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
                <Button className='btn-lg' onClick={selectBtnHandle}>Выбрать</Button>
            </div>
        </div>
        
    );
};

export default TechnicItem;