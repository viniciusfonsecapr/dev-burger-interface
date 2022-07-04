import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categorias-logo.svg'
import { Container, CategoryImg, ContainerItems,Image, Button } from './styles'

import api from '../../services/api'

export function CategoryCarousel() {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImg src={Category} alt="logo-da-categoria"></CategoryImg>
            <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints} >
                {categories &&
                    categories.map((Category) => (
                        <ContainerItems key={Category.id}>
                            <Image src={Category.url} alt="foto-da-categoria"></Image>
                            <Button>{Category.name}</Button>
                        </ContainerItems>
                    ))
                }

            </Carousel>
        </Container>
    )
}

