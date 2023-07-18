import React, { useEffect, useState } from "react";
import api from '../../../services/api'
import { Container, Img, EditIconStyle } from './styles'
import formatCurrency from '../../../utils/formatCurrency'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';



function ListProducts() {

    const [products, setProducts] = useState()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
            
        }
   
        loadOrders()
        
    }, [])


    function isOffer (offerStatus) {
        if(offerStatus){
          return <CheckBoxIcon style={{color:'green'}}/>
        } 
        return <CancelIcon style={{color:'red'}}/>
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Nome</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Produto em Oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && 
                        products.map((product) => (
                            <TableRow
                                key={product.id}
                               
                            >
                                <TableCell component="th" >
                                    {product.name}
                                </TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center"><Img src={product.url} alt="imagem-produto"/></TableCell>
                                <TableCell><EditIconStyle/></TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts
