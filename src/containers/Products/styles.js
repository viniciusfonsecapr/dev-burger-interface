import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;


  .MuiMenu-list {
    width:100vw;
  }


`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
gap: 15px;
justify-content:center;
  margin-top: 50px;

  @media (min-width:350px) and (max-width: 700px) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 25px;
    padding-left: 0 auto;
    margin-top: 40px;
  }

  @media (min-width:1000px) and (max-width: 1200px) {
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:center;
    gap: 50px;
    padding: 20px;
  }


`


