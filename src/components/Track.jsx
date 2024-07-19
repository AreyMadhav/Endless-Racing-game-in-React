// src/components/Track.jsx
import React from 'react';
import './Track.css';

const Track = ({ children }) => {
    return (
        <div className="track">
            {children}
        </div>
    );
};

export default Track;
