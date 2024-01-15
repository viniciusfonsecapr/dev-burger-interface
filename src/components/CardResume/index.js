import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

/// Serviços Reutilizados ou Acessados
import { useCart } from '../../hooks/CartContext'
import formatCurrency from "../../utils/formatCurrency";
import api from "../../services/api";

/// Visual e Estilos 
import { Container, ButtonFinish, ButtonEmptyCart } from './styles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export function CardResume() {

    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)
    const { cartProducts } = useCart()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let history = useHistory();

    function handleClick() {
        handleOpen();
        submitOrder()
    }

    function handleHome() {
        history.push("/");
    }

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

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #fff',
        boxShadow: 24,
        p: 5,
    };

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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {submitOrder &&
                        <Typography sx={{ marginBottom: '15px' }} id="modal-modal-title" variant="h6" component="h2">

                            Pedido realizado com sucesso

                        </Typography>
                    }

                    <Button variant="contained" onClick={handleHome}>Voltar para a Home</Button>
                </Box>

            </Modal>


            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (

                    <ButtonFinish ButtonFinish onClick={handleClick}>
                    Finalizar Pedido
                </ButtonFinish> 
                   
                ))
                : (
                    <ButtonEmptyCart style={{background: 'red'}}> 
                        Coloque Produtos no Carrinho
                    </ButtonEmptyCart>
                )
            }

        </div >
    )
}

 