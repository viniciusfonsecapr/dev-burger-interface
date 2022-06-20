import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categorias-logo.svg'
import { Container, CategoryImg } from './styles'

import api from '../../services/api'

function CategoryCarousel() {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt="logo-da-home"></CategoryImg>
            <Carousel itemsToShow={4} >
                { 
                   categories && categories.map( category => (
                    <div key={category.id}>
                        <img src={category.url} alt="foto-da-categoria" width={100} height={100}></img>
                        <button>{category.name}</button>
                    </div>
                   ))
                }
            </Carousel>
        </Container>
    )
}

export default CategoryCarousel