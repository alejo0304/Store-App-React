import React, { useState } from 'react';

function StarRating({ rating, onRate }) {
    const [hoveredRating, setHoveredRating] = useState(0); // Estado para las estrellas al pasar el mouse
    const [currentRating, setCurrentRating] = useState(rating); // Estado para la calificación actual

    const handleMouseEnter = (index) => {
        setHoveredRating(index + 1); // Cambiar el estado al pasar el mouse
    };

    const handleMouseLeave = () => {
        setHoveredRating(0); // Volver a 0 cuando el mouse sale
    };

    const handleClick = (index) => {
        setCurrentRating(index + 1); // Actualizar la calificación actual al hacer clic
        onRate(index + 1); // Llamar a la función onRate para actualizar la calificación externa
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => (
                <span
                    key={index}
                    className={index < (hoveredRating || currentRating) ? "star filled" : "star"}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                    style={{ cursor: 'pointer' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default StarRating;