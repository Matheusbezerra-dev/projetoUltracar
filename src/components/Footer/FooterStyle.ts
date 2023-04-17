import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  background-color: rgb(32,43 ,87);
  color:rgb(250,250,250);
  a {
    color:rgb(250,250,250);
    text-decoration: none;
    &:hover{
      opacity:0.5;
    }
  }
`;
