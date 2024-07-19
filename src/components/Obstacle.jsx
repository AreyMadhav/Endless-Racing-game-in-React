// src/components/Obstacle.jsx
import React from 'react';
import './Obstacle.css';

const Obstacle = ({ position }) => {
    return (
        <div className="obstacle" style={{ top: position + 'px' }}></div>
    );
};

export default Obstacle;
