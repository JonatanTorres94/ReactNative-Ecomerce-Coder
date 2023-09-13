import { View, Text, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItems from '../components/ProductItems'

const Products = ({category}) => {


    const [productFiltered, setProductFiltered] = useState([])
    const [text, setText] = useState('')



    useEffect(() => {

        const filterByCategory = products.filter((el) => el.category === category )
        setProductFiltered(filterByCategory)
        
        if (text){
            const titleProduct = products.filter(
                (el) => el.title.toLowerCase() === text.toLowerCase())
                setProductFiltered(titleProduct)
        }


    }, [category, text])
    
    return (
        <View>
            <Header title='Products' />
            <Search text={text} setText={setText} />
            <FlatList
                data={productFiltered}
                keyExtractor={products.id}
                renderItem={({item}) => <ProductItems item={item} />}

            />

        </View>
    )
}

export default Products