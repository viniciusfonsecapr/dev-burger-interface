import React from "react";

import CartImage from '../../assets/card-image.svg'

import { CartItems, CardResume } from "../../components";

import { Container, CartImg, Wrapper } from './styles'

export function Cart() {

    return (
        <Container>
            <CartImg src={CartImage} alt="logo-do-carrinho"></CartImg>
            <Wrapper>
                <CartItems></CartItems>
                <CardResume></CardResume>
            </Wrapper>

        </Container>
    )
}
