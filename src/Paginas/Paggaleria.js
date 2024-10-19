import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import StarRating from '../Componentes/Compcalificacion'; 
import '../Estilos/galeria.css';

function Galeria() {
    const { products, loading, error } = useSelector(state => state.api); 
    const [ratings, setRatings] = useState({}); // Estado para guardar las calificaciones

    const handleRate = (productId, rating) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [productId]: rating, // Guarda la calificación para el producto
        }));
    };

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error al cargar productos: {error}</div>;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Galería de Productos</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={product.image} alt={product.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <StarRating 
                                    rating={ratings[product.id] || 0} // Usar la calificación guardada o 0
                                    onRate={(rating) => handleRate(product.id, rating)} // Pasar la función de calificación
                                />
                                <p className="card-text">{product.description.substring(0, 100)}...</p>
                                <p className="card-text"><strong>Precio: ${product.price}</strong></p>
                                <Link to={`/producto/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Galeria;