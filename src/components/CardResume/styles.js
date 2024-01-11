import styled from 'styled-components'
import { Button } from '../Button'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    grid-gap: 10px 50px;
    .title {
      grid-area: title;
      margin-bottom: 20px;
    }
    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
  }
`

export const ButtonFinish = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top:10%;
  @media (max-width: 600px) {
    margin: 0 auto;
    margin-top:5%;
    width: 80%
  }
`
