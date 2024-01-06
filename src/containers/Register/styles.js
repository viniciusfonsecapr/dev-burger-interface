import styled from 'styled-components'
import BackgroundImage from '../../assets/backburguer3.jpg'


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  background-repeat:no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const RegisterImage = styled.img`
  height: 70%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
`
export const ContainerItens = styled.div`
  height: 85%;
  background-color: rgba(255,255,255,0.3);
  border-radius: 25px;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 15px rgba(108, 144, 226, 0.24);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  h1 {
    margin-top: 10px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #000;
  }

  form {
      display: flex;
      flex-direction: column;

  }
`

export const Label = styled.p`
  margin-top: 14px;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #000;
`
export const Input = styled.input`
  width: 391.42px;
  padding-left: 8px;
  height: 38.32px;
  border: ${ props => props.error ? '2px solid #CC1717;' : 'none'};
  outline: none;
  background: #ffffff;
  box-shadow: 3px 3px 10px ${ props => props.error ? '#CC1717;' : '#fcdb03'};
  border-radius: 5px;
  font-size: 15px;
`



export const SignUpLink = styled.p`
  
  margin-top: 27px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #000;

  a {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #000;
  }
`
