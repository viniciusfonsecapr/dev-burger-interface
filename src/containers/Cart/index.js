import React from "react";

import CartImage from '../../assets/card-image.svg'

import { CartItems } from "../../components";

import { Container, CartImg } from './styles' 

export function Cart (){

    return (
        <Container>
            <CartImg src={CartImage} alt="logo-do-carrinho"></CartImg>
            <CartItems></CartItems>
        </Container>
    )
}
