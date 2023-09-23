import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Container, ItemContainer, ListLink } from './styles'
// import api from "../../services/api";
import listLinks from './menu-list'
import { useUser } from '../../hooks/UserContext';
import paths from '../../constants/paths';
import PropTypes from 'prop-types'

export function SideMenuAdmin({path}) {

    const { logout } = useUser()


    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'fixed', bottom: '5%' }}>
                <LogoutIcon style={{ color: '#ffff' }} />
                <ListLink to={paths.Login} onClick={logout} >Sair</ListLink>
            </ItemContainer>
        </Container>
    )
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string
  }
