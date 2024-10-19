import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
                        <h5>Contacto</h5>
                        <p><FaMapMarkerAlt /> Dirección: Calle 123, Ciudad, País</p>
                        <p><FaPhoneAlt /> Teléfono: +123 456 789</p>
                    </Col>
                    <Col md={6} className="text-center text-md-right">
                        <h5>Síguenos</h5>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FaInstagram />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FaTwitter />
                        </a>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>
                        <p>&copy; 2024. Todos los derechos reservados.</p>
                        <p>Este proyecto fue creado por <a href="https://github.com/alejo0304" target="_blank" rel="noopener noreferrer" className="text-light">Alejandro Velasquez Forero</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;