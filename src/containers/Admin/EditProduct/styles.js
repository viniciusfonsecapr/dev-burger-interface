import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 400px;
    height: 550px;
    background: #565656;
    display: flex;
    flex-direction: column;
    gap:25px;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0px 4px 14px 0px #0000001a;
  }
`

export const Label = styled.p`

  font-size: 18px;
  color: white;
`

export const Input = styled.input`
  height: 40px;
  padding-left: 10px;
  font-size: 18px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 0px #0000001a;
  background: #ffff;
  border: none;
  min-width: 280px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffff;
  border-radius: 5px;
  padding: 10px;
  margin-top: 25px;
  gap: 15px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInputCheckBox = styled.div`
display:flex;
justify-content:left;
align-items:center;


input {
  width:25px;
  height:25px;
  cursor:pointer;
}

p {
  font-size: 16px;
  padding-left:15px; 
  color:white;
}

`

export const ButtonAddProduct = styled(Button)`
  width: 100%;
  height: 48px;
  margin-top: 10px;
`
