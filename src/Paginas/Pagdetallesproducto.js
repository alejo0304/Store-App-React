import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import '../Estilos/tableEstilo.css'; 

function DetallesProductos() {
    const { products, loading, error } = useSelector(state => state.api); 
    const itemsPerPage = 10; 
    const [currentPage, setCurrentPage] = React.useState(0);

    const pageCount = Math.ceil(products.length / itemsPerPage);
    const currentItems = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error al cargar productos: {error}</div>;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Tabla de Productos</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={"Anterior"}
                nextLabel={"Siguiente"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default DetallesProductos;