import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../Reducers/reducers'; 

function API() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.api); 
    useEffect(() => {
        const fetchData = async () => {

            if (products.length > 0) return;

            dispatch(fetchProductsRequest());
            try {
                const response = await fetch("https://fakestoreapi.com/products/");
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                const data = await response.json();
                dispatch(fetchProductsSuccess(data));
            } catch (error) {
                dispatch(fetchProductsFailure(error.message));
            }
        };

        fetchData();
    }, [dispatch, products.length]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return null; 
}

export default API;