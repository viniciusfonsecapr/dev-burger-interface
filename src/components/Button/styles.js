import styled from "styled-components";


export const ContainerButton = styled.button`

  width: 182.81px;
  height: 36.13px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;

  &:hover {
      opacity: 0.7;
      cursor: pointer;
      transform: scale(1.1);
  }
  &:active{
      opacity: 0.6;
  }
`