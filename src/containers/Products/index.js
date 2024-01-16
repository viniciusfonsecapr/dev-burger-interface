import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import ProductsImage from '../../assets/produtos-home.svg'
import formatCurrency from '../../utils/formatCurrency'

import {
    Container,
    ProductsImg,
    CategoryButton,
    CategoryMenu,
    ProductsContainer
} from './styles'
import { CardProduct } from '../../components'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export function Products({ location: { state } }) {
    let categoryId = 0
    if (state?.categoryId) {
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryId)

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
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Container>
            <ProductsImg src={ProductsImage} alt="logo-dos-produtos"></ProductsImg>
            <CategoryMenu>
                <Button
                    id="contained-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="contained"
                    size='large'
                    sx={{
                        width: '60%', padding:'15px',
                        background: '#4A2668'
                       
                    }}
                    color="info"
                >
                   <RestaurantMenuIcon size="large" sx={{marginRight:'25px'}} /> Categorias
                </Button>
                <Menu
                
                    variant='selectedMenu'
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button'
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                  
                  
                >
                    {categories &&
                        categories.map(category => (

                            <CategoryButton
                                type="button"
                                key={category.id}
                                isActiveCategory={activeCategory === category.id}
                                onClick={() => {
                                    setActiveCategory(category.id)
                                }}
                            >
                                <MenuItem onClick={handleClose}> {category.name}</MenuItem>

                            </CategoryButton>
                        ))}
                </Menu>

            </CategoryMenu>

            {/* <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu> */}
            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map(product => (
                        <CardProduct key={product.id} product={product}></CardProduct>
                    ))}
            </ProductsContainer>
        </Container>
    )
}
