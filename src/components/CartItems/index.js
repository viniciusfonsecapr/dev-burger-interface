import React from "react";

import { Container, Header, Body, EmptyCart } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import Empty from '../../assets/cart-empty.svg'

export function CartItems() {
    const { cartProducts } = useCart()
    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{paddingRight: 30}}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.lenght > 0 ? 
             cartProducts.map(product => (

                <Body key={product.id}>
                    <img src={product.url}></img>
                    <p>{product.name}</p>
                    <p>{formatCurrency(product.price)}</p>
                    <p>{product.quantity}</p>
                    <p>{formatCurrency(product.quantity * product.price)}</p>
                </Body>
            ))
                : (
                    <EmptyCart>
                        Carrinho Vazio
                    <img src={Empty}></img>
                    </EmptyCart>
                )

        
        }

        </Container>
    )
}
