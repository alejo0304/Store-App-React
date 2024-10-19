import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from '../Paginas/Pagcontacto';
import DetallesProductos from '../Paginas/Pagdetallesproducto';
import Principal from '../Paginas/Pagprincipal';
import NavigationBar from '../Componentes/CompnavbarPrincipal';
import API from '../API/api';
import Galeria from '../Paginas/Paggaleria';
import Pagproducto from '../Paginas/Pagproducto';


function App() {
    return (
        <>
        <BrowserRouter>
        <API/>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Principal />} /> {/* Página de inicio */}
                <Route path="/galeria" element={<Galeria/>}/>   {/* Página de Galería */}
                <Route path="/detalles" element={<DetallesProductos />} />   {/* Página de Detalles */}
                <Route path="/contacto" element={<Contacto />} /> {/* Página de Contacto */}
                <Route path="/producto/:id" element={<Pagproducto />} /> {/* Página de Contacto */}
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;