import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"


export const ecApi = createApi({
    reducerPath: "ecApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "categories.json"
        }),
        getProducts: builder.query({
            query:() => "products.json"
        }),
        //Acceso a la img en DB
        getImage: builder.query({
            query: () => 'image.json'
        }),
        //Envia la img a la DB
        putImage: builder.mutation({
            query: (image) => ({
                url: 'image.json',
                method: 'PUT',
                body: image
            }),
        })
    })
})


export const { useGetCategoriesQuery, useGetProductsQuery, useGetImageQuery, usePutImageMutation } = ecApi