import styled from "styled-components";

export const Container = styled.div`
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

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

`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

p {
 font-weight: 700;
font-size: 18px;
line-height: 120%;
color: #424242;
padding-top: 8px;
}


`

export const Image = styled.img`
width: 200px;
border-radius:10px;
cursor: pointer;
margin-bottom: 8px;
`

export const Button = styled.button`
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
`



