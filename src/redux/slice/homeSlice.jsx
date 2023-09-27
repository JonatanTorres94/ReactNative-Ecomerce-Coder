import { createSlice } from "@reduxjs/toolkit"
import { categories } from "../../data/categories"
import { products } from "../../data/products";

const homeSlice = createSlice({

    name: 'home',
    initialState: {
        allCategories: categories,
        allProducts: products,
        categorySelected: '',
        productSelected: {}
    },

    reducers: {
        setCategory: (state, action) =>{
            state.categorySelected = action.payload
        },

        setProductSelected: (state, action) =>{
            state.productSelected === action.payload
        }
    }
})


export const {setCategory} = homeSlice.actions
export default homeSlice.reducer;