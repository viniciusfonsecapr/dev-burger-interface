import React from "react";
import { useHistory } from "react-router-dom";
import CartIcon from '../../assets/cart-icon.svg'
import { useUser } from "../../hooks/UserContext";
import PeopleIcon from '../../assets/people-icon.svg'

import { Container, ContainerLeft, PageLink, ContainerRight, ContainerText, Line, PageLinkExit } from './styles'

export function Header() {

    const {push, location: {pathname}} = useHistory()

    const { logout, userData} = useUser()

    const logoutUser = () => {
        logout()
        push('/')
    }
    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink>
                    <img src={CartIcon} alt="carrinho" onClick={() => push('/carrinho')}></img>
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={PeopleIcon} alt="icone do perfil"></img>
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>
                        Sair
                    </PageLinkExit>
                </ContainerText>
            </ContainerRight>



        </Container>
    )
}
