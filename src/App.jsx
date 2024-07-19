// src/App.jsx
import React, { useState, useEffect } from 'react';
import Car from './components/Car';
import Track from './components/Track';
import Obstacle from './components/Obstacle';
import './App.css';

const App = () => {
    const [carPosition, setCarPosition] = useState(0);
    const [obstacles, setObstacles] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // Handle car movement
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                setCarPosition((prev) => Math.max(prev - 10, 0));
            } else if (e.key === 'ArrowRight') {
                setCarPosition((prev) => Math.min(prev + 10, window.innerWidth - 50));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Generate obstacles
    useEffect(() => {
        const interval = setInterval(() => {
            setObstacles((prev) => [...prev, { position: -50 }]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Move obstacles and check for collisions
    useEffect(() => {
        const interval = setInterval(() => {
            setObstacles((prev) =>
                prev.map((obs) => ({
                    ...obs,
                    position: obs.position + 10,
                }))
            );
            setScore((prev) => prev + 1);

            obstacles.forEach((obs) => {
                if (obs.position > window.innerHeight - 50 && Math.abs(carPosition - obs.position) < 50) {
                    setGameOver(true);
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [obstacles, carPosition]);

    if (gameOver) {
        return <div className="game-over">Game Over! Your Score: {score}</div>;
    }

    return (
        <Track>
            <Car position={carPosition} />
            {obstacles.map((obs, index) => (
                <Obstacle key={index} position={obs.position} />
            ))}
            <div className="score">Score: {score}</div>
        </Track>
    );
};

export default App;
