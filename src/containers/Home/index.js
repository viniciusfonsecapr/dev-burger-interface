import React from "react";

import HomeLogo from '../../assets/home-logo.svg'

import { Container, HomeImg } from './styles' 

function Home (){

    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo-da-home"></HomeImg>
        </Container>
    )
}

export default Home