import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

function Pagproducto() {
    const { id } = useParams(); 
    const { products } = useSelector(state => state.api);
    const [product, setProduct] = useState(null);

    useEffect(() => {
       
        const foundProduct = products.find(p => p.id === parseInt(id)); 
        setProduct(foundProduct);
    }, [id, products]);

    if (!product) {
        return <div>Cargando detalles del producto...</div>; 
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">{product.title}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" /> 
                </div>
                <div className="col-md-6">
                    <h5>Descripción:</h5>
                    <p>{product.description}</p>
                    <p><strong>Precio: ${product.price}</strong></p>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Cantidad:</label>
                        <input type="number" id="quantity" className="form-control" min="1" defaultValue="1" />
                    </div>
                    <button className="btn btn-success">Comprar</button> 
                </div>
            </div>
        </div>
    );
}

export default Pagproducto;