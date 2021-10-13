import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // const {service} = props;
    const { name, price, description, img } = service;
    return (
        <div className='service'>
            <img width='100%' src={img} alt="" />
            <div className='service-info'>
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;