import React from "react";
import PropTypes from 'prop-types'
import { useCart } from "../../hooks/CartContext";
import { useHistory } from "react-router-dom";
import {Container,Image, ProductName, ProductPrice } from './styles'
import {Button} from '../Button'

export function CardProduct ({ product }){

    const { putProductInCart } = useCart()
    const { push } = useHistory()

    return (
        <Container>
            <Image src={product.url} alt="imagem do produto"></Image>
            <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formatedPrice}</ProductPrice>
            <Button onClick={() => {
                putProductInCart(product)
                push('/carrinho')
                }} 
                >Adicionar</Button>
            </div>
        </Container>
    )
}


CardProduct.propTypes = {
    product: PropTypes.object
}