import { Link } from "react-router-dom";
import logo from '../../img/logoMiraiTest1.svg';
import Hamburgue from "../Hamburguer/Hamburguer";
import { ContainerHeader, ImgLogo } from "./HeaderStyle";

export default function Header() {
  
  return (
  
    <ContainerHeader>
      <Link 
        to='/'
      >
        <ImgLogo
          src={ logo } 
          alt='logo'
        />      
      </Link>
      <Hamburgue />
    </ContainerHeader>
  )
}
