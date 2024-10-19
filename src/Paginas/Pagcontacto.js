import React, { useState } from 'react';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Datos enviados:', formData);
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        setFormData({ nombre: '', email: '', mensaje: '' }); 
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">¡Contáctanos!</h2>
            <p className="text-center mb-4">
                Si tienes alguna pregunta o comentario, no dudes en contactarnos. 
                Estamos aquí para ayudarte.
            </p>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="nombre" 
                                name="nombre" 
                                value={formData.nombre} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea 
                                className="form-control" 
                                id="mensaje" 
                                name="mensaje" 
                                rows="4" 
                                value={formData.mensaje} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;