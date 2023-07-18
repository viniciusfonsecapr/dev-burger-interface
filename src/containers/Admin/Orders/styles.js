import styled from "styled-components";
import ReactSelect from 'react-select'



export const Container = styled.div`
background: #EFEFEF;
min-height: 100vh;


`

export const ProductImg = styled.img`
width:100px;
border-radius: 5px;
height: 70px;
`


export const ReactSelectStyle = styled(ReactSelect)`
width:250px;

.css-13cymwt-control {
    cursor:pointer;
}

`

export const Menu = styled.div`
display:flex;
gap:58px;
justify-content: center;
margin:20px 0px;


`


export const LinkMenu = styled.a`
color:#323D5D;
cursor:pointer;
font-weight:${ props => props.isActiveStatus ? 'bold' : '400'} ;
border-bottom:${ props => props.isActiveStatus ? '2px solid #9758A6' : 'none'} ;
padding-bottom: 5px;

`