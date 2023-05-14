import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Context } from '../..';
import TechnicItem from './TechnicItem';
import { Navigate, useNavigate } from 'react-router-dom';
import { PAY_ROUTE } from '../../utils/consts';

const TourItem = ({tour}) => {
    const {technic, tour : tourContext} = useContext(Context)
    const navigate = useNavigate()

    function clickHandle() {
        tourContext.setSelectedTour(tour)
        // console.log(tourContext.selectedTour.name)
        navigate(PAY_ROUTE)
    }
    
    return (
        <div className='mb-3 mt-3 d-flex'>
            <Card 
                key={tour.id}
                style={{width:"100%", height:"50%", paddingRight:30, paddingLeft:30, paddingTop:20, paddingBottom:20}} 
                className="pe-5 ps-5"
            >
                <div className='mt-1 mb-2'>
                    <div className="d-flex justify-content-between">
                        <div className='d-flex flex-column'>
                            <h3>{tour.name}</h3>
                            {tour.address}
                        </div>
                        <div>
                            <TechnicItem
                                key={technic.id} 
                                technic={technic.technics[tour.technicId - 1]}
                            />
                        </div>
                    </div>
                    <div className='d-flex pe-5'>
                        <Button className='btn-lg' onClick={ clickHandle }>Выбрать</Button>
                    </div>
                </div>
            </Card>
        </div>
        
    );
};

export default TourItem;