import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],   
  loading: false, 
  error: null     
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;