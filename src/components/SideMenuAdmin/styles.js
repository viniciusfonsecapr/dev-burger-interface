import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin:50px 15px;
  }
`

export const ItemContainer = styled.div`
height:60px;
display:flex;
align-items: center;
background: ${props => props.isActive ? '#565656' : 'none'};
border-radius: 2px;
margin:8px;
padding-left:20px;
.icon {
    color:#ffff;
}
`

export const ListLink = styled(Link)`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration: none;
color: white;
margin-left:8px;

`
