import styled from 'styled-components'
import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
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
  height: 70%;
  background: #373737;
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);

  h1 {
    margin-top: 10px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
  }

  form {
      display: flex;
      flex-direction: column;

  }
`

export const Label = styled.p`
  margin-top: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`
export const Input = styled.input`
  width: 391.42px;
  padding-left: 8px;
  height: 38.32px;
  border: ${ props => props.error ? '2px solid #CC1717;' : 'none'};
  outline: none;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  font-size: 15px;
`

export const ErrorMessage = styled.p`
font-weight: 400;
font-size: 13px;
line-height: 14px;
color: #CC1717;
margin-top: 2px;


`

export const SignUpLink = styled.p`
  
  margin-top: 27px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;

    color: #ffffff;
  }
`
