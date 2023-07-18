import React from 'react'
import { Container, ContainerItems } from './styles'
import Orders from './Orders'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'

export function Admin() {
    return (

        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                {/* <Orders/> */}
                <ListProducts />
            </ContainerItems>

        </Container>
    )
}