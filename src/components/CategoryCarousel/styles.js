import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
background-color: #EFEFEF;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
padding: 25px 0;

.rec.rec-arrow {
    background-color: #9758a6;
    color: #EFEFEF;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #EFEFEF;
    color: #9758a6;
}
.rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #EFEFEF;
}
`

export const CategoryImg = styled.img`

@media (max-width:600px) {
    width: 80%;
}

`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;


`

export const Image = styled.img`
width: 200px;
height: 200px;
border-radius:10px;
cursor: pointer;
`

export const Button = styled(Link)`
margin-top: 16px;
background: #9758A6;
border-radius: 8px;
height: 50px;
border: none;

text-align: center;
color: #FFFFFF;
font-weight: 700;
font-size: 18px;

cursor: pointer;

&:hover {
    opacity: 0.8;
}
&:active {
    opacity:  0.6;
}

text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
`



