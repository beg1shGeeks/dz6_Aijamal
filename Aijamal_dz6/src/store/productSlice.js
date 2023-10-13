import { createSlice } from '@reduxjs/toolkit';
import prroducts from '../data/product.json';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    dataPrducts: prroducts,
    basket: [],
  },
  reducers: {
    basketAddProduct(state, action) {
      if (state.basket.find((product) => product._id == action.payload._id)) {
        return state;
      } else {
        state.basket.push({ ...action.payload, countPorduct: 1 });
      }
    },
    basketIncrenent(state, action) {
      state.basket.map((product) => {
        if (product._id == action.payload) {
          product.countPorduct = product.countPorduct + 1;
        }
      });
    },
    basketDincrenent(state, action) {
      state.basket.map((product) => {
        if (product._id == action.payload) {
          product.countPorduct <= 1
            ? (product.countPorduct = product.countPorduct = 1)
            : (product.countPorduct = product.countPorduct - 1);
        }
      });
    },
    basketDeletPorduct(state, action) {
      state.basket = state.basket.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const {
  basketAddProduct,
  basketIncrenent,
  basketDincrenent,
  basketDeletPorduct,
} = productSlice.actions;

export default productSlice.reducer;
