import React, { useState, useEffect } from "react";

import { Container, ButtonFinish } from './styles'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from "../../utils/formatCurrency";
import api from "../../services/api";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function CardResume() {

    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)
    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })
        await toast.promise(api.post('orders', { products: order }),
            {
                pending: 'Anotando seu pedido, aguarde...',
                success: 'Pedido realizado com sucesso',
                error: 'Falha ao tentar realizar o seu pedido',
            }
        )
    }

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>

            </Container>
            <ButtonFinish  onClick={submitOrder}>
                Finalizar Pedido
            </ButtonFinish>
        </div>
    )
}
