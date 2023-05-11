import React, { useContext, useState } from 'react';
import { Card, Col, Image} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SelectTechnic from './modals/SelectTechnic';
import { Context } from '..';

// useHistory в reactrouterdomv6 == useNavigate

// здесь нужно вставить корректно данные по маршруту
const TrailItem = ({trail}) => {
    const [technicVisible, setTechnicVisible] = useState(false)
    const {trail : trailContext} = useContext(Context)
    // const history = useNavigate()
    
    // функция, которая при нажатии кнопки "Выбрать маршрут" сохранит
    // информацию о выбранном маршруте в TrailStore и откроет модальное
    // окно выбора вертолета
    function selectBtnHandle() {
        trailContext.setSelectedTrail(trail)
        // console.log(trailContext.selectedTrail)
        setTechnicVisible(true)
    }
    
    return (
        <Col md={12} className={"mt-5 mb-5"}>
            <div className='d-flex justify-content-between'>
                <div style={{width:700, height:480}} className='d-flex align-items-center'>
                    <Image 
                        style={{maxWidth:'100%', height:"auto", maxHeight:"100%", display:'block', objectFit:'cover'}} 
                        src={trail.image} 
                    />
                </div>
                <Card 
                    // active={trail.id === trailContext.selectedTrail.id}
                    style={{width:500, paddingRight:60, paddingLeft:60, paddingTop:40, paddingBottom:20}} 
                    className="ms-5 d-flex flex-column align-items-center"
                >
                    <h2>{trail.name}</h2>
                    <div>
                        <div style={{fontSize: 24, marginTop:30}}>
                            <b>Описание:</b>
                        </div>
                        <div style={{fontSize: 18, marginTop:15}}>
                            {trail.description}
                        </div>
                    </div>
                    <div style={{fontSize: 24, marginTop:45}}>
                        <b>Время путешествия:</b> {trail.trailtime}ч.
                    </div>
                    <Button 
                        style={{width:"80%", fontSize: 20, marginTop:65}}
                        onClick={selectBtnHandle}
                    >
                        Выбрать маршрут
                    </Button>
                </Card>
            </div>
            <SelectTechnic show={technicVisible} onHide={() => setTechnicVisible(false)}/>
        </Col>
    );
};

export default TrailItem;