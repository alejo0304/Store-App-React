import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './reducers';

//definicion de store
const store= configureStore({
        reducer:{
            api: productsSlice
        }

});


export default store;