import React, { useContext, useState } from 'react';
import { Card, Col, Image} from 'react-bootstrap';

const TechnicItem = ({technic}) => {
 
    return (
        <div className='d-flex flex-row justify-content-between'>
            <Card 
                key={technic.id}
                style={{maxWidth:450, minHeight:175, paddingRight:30, paddingLeft:30, paddingTop:20, paddingBottom:20}} 
                className="d-flex align-items-center"
            >
                <div 
                    className='d-flex align-items-center'
                    style={{width:""}} 
                >        
                    <div 
                        className='mt-3 mb-2'
                        style={{fontSize:18, width:"60%"}}
                    >
                        <Image
                            src={technic.image}
                            style={{maxWidth:"90%", height:"auto", maxHeight:"100%", display:'block', objectFit:'cover'}} 
                        />
                    </div>
                    <div>
                        <div style={{fontSize:22}}>{technic.name}</div>
                        <div><b>Вместимость:</b> {technic.contain} чел.</div>
                    </div>
                </div>
            </Card>
        </div>
        
    );
};

export default TechnicItem;