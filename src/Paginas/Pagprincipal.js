import Footer from '../Componentes/CompfooterPrincipal';
import { Link } from 'react-router-dom';

function Principal() {
    return (
        <>
         {/* Info y cosas */}
        <div>
            <header className="bg-dark text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Bienvenidos a la Tienda Surtitodo</h1>
                    <p className="lead">Ropa , Accesorios ,Maletas y muchos mas.</p>
                </div>
            </header>

            {/* Botones de navegación a diferentes secciones */}
            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                    <Link to="/galeria" className="btn btn-outline-dark btn-lg">Galería</Link>
                 </div>
                    <div className="col-md-4">
                    <Link to="/detalles" className="btn btn-outline-dark btn-lg">Detalles de Productos</Link>
                    </div>
                    <div className="col-md-4">
                    <Link to="/contacto" className="btn btn-outline-dark btn-lg">Contacto</Link>
                    </div>
                </div>
            </section>

            {/* Sección de descripción del negocio */}
            <section className="container text-center my-5">
                <h2>Sobre Nosotros</h2>
                <p className="lead">
                    En <strong>Tienda Surtitodo</strong>, ofrecemos una selección única de prendas diseñadas para
                    destacar lo mejor de ti. Nuestros productos son elaborados con los mejores materiales,
                    manteniendo un enfoque en la sostenibilidad y el estilo contemporáneo.
                </p>
            </section>

            <Footer />
        </div>
        </>
    );
}

export default Principal;