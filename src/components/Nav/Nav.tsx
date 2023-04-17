import { Link } from "react-router-dom";
import { ContactBtn, ContainerNav } from "./NavStyle";
import INav from "../../interfaces/INav";

const Nav: React.FC<INav> = ({ open }) => {
  return (
    <ContainerNav open={ open }>
        <Link  to='/cadastra-cliente'>
          Cadastra Cliente
        </Link>
        <Link  to='/cadastrar-peças'>
          Cadastrar Peças
        </Link>      
        <Link 
          to='/cadastrar-colaborador'
        >
        Cadastrar Colaborador
        </Link>     
    </ContainerNav>
  )
}

export default Nav;
