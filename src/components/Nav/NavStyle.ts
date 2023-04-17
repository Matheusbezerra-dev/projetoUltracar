import styled from "styled-components";

export const ContainerNav = styled.nav`
  align-items: center;
  max-width: 60%;
  width: 100%;
  margin-right: 2rem;
  display: flex;
  justify-content: space-around;
  a {
    color:rgb(250,250,250);
    text-decoration: none;
    &:hover{
      opacity:0.5;
    }
  }

  @media (max-width: 750px){
    max-width: 100%;    
    flex-flow: column nowrap;
    background-color:  rgb(32,43 ,87);
    position: fixed;
    overflow: hidden;
    transform: ${({ open }: {open: boolean}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index: 1;
    margin-right: 0;
    height: 100%;
    width: 300px;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color:rgb(250,250,250);
      text-decoration: none;    
      &:hover{
        opacity:0.5;
      }
    }
  }
`;

export const ContactBtn = styled.button`
  height: 3rem;
  width: 8rem;
  transition: background-color 0.3s ease;
  font-size: 17px;

&:hover {
  background-color: #000000;
  color:rgb(250,250,250);
  cursor: pointer;

}

&:active {
  transition: 3s;
  background-color: #2E8B57;
  color:rgb(250,250,250);

}
`;
