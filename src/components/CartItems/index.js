import React from "react";

import { Container, Header, Body, EmptyCart } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import Empty from '../../assets/cart-empty.svg'

export function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts } = useCart()
    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (

                    <Body key={product.id}>
                        <img src={product.url} alt="foto-do-produto"></img>
                        <p>{product.name}</p>
                        <p style={{marginLeft: '-15%'}}>{formatCurrency(product.price)}</p>
                        <div className="quantity-container">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>

                        <p style={{marginLeft: '22%'}}>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))
                : (
                    <EmptyCart>
                        <p>Carrinho Vazio</p>
                        <img src={Empty} alt="carrinho-vazio"></img>
                    </EmptyCart>
                )
            }
        </Container>
    )
}
