// src/components/Car.jsx
import React from 'react';
import './Car.css';

const Car = ({ position }) => {
    return (
        <div className="car" style={{ left: position + 'px' }}></div>
    );
};

export default Car;
