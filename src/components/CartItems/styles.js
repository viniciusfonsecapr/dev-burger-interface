import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(5, 0.55fr);
    padding: 3px;
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;
  img {
    border-radius: 10px;
    width: 100px;
  }
  p {
    font-size: 16px;
    color: #000000;
    margin-left: -14%;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(5, 0.45fr);
    padding: 10px;
    grid-gap: 2px 2px;
    width: 90%;
  

    img {
      margin-top:12px;
      width: 50px;
      height: 50px;
      margin-right:20px;
    }
    p {
      font-size: 15px;
      padding: 8px;
    }
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
    }
    p {
      margin-top: 5px;
    }

    @media (max-width: 600px) {
        margin-top: -15%;
      margin-left: 5%;
      gap: 5px;
      button {
        height: 54px;
        background: transparent;
        border: none;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
      }
      p {
        margin-top: 15%;
        margin-left: 2%;
      }
    }
  }
`

export const EmptyCart = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
  img {
    margin-left: 30px;
    width: 70px;
  }
`
