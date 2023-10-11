import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({

    name: 'home',
    initialState: {
        allCategories: '',
        allProducts: '',
        categorySelected: '',
        productSelected: {}
    },

    reducers: {
        setCategory: (state, action) =>{
            state.categorySelected = action.payload
        },

        setProductSelected: (state, action) =>{
            state.productSelected = action.payload
        }
    }
})


export const {setCategory} = homeSlice.actions
export default homeSlice.reducer;