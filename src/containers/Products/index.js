import React, { useState, useEffect } from "react";
import api from '../../services/api'

import ProductsImage from '../../assets/produtos-home.svg'
import formatCurrency from '../../utils/formatCurrency'

import { Container, ProductsImg, CategoryButton, CategoryMenu, ProductsContainer } from './styles'
import CardProduct from "../../components/CardProduct";

function Products() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }
        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setProducts(newProducts)
        }
        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {


            const newFilteredProducts = products.filter(product => product.category_id === activeCategory)

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])


    return (
        <Container>
            <ProductsImg src={ProductsImage} alt="logo-dos-produtos"></ProductsImg>
            <CategoryMenu>
                {categories && categories.map(category => (
                    <CategoryButton
                        type="button"
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            setActiveCategory(category.id)
                        }}>
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product}></CardProduct>
                ))}
            </ProductsContainer>
        </Container>
    )
}

export default Products