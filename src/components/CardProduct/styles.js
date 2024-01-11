import styled from 'styled-components'
import { Button } from '../Button'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: 20vw;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width:350px) and (max-width: 700px) {
    width: 100vw;
    gap: 40px;
    padding: 20px;
    margin: 0 auto;
    align-items:center;
    justify-content:center;
  }

  @media (max-width: 1279px)  {
    width: 80vw;
    gap: 60px;

  }

  @media (min-width:1000px) and (max-width: 1300px) {
    width: 45vw;
    gap: 60px;
 
  }
  @media (min-width:1301px) and (max-width: 1800px) {
    width:40vw;
    gap: 100px;
 
  }
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;

  @media (max-width: 700px) {
    width: 120px;
    height: 120px;

    @media (min-width: 701px) {
      width: 40vw;
      gap: 50px;
    }
  }
`
export const ProductName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #000000;
`
export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-top: 30px;
`

export const ButtonAdd = styled(Button)`
  margin-top: 10%;

  @media (max-width: 700px) {
    margin-top: 10%;
    width:90%
  }
`
