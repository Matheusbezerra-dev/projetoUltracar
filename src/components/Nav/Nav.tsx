import { Link } from "react-router-dom";
import { ContainerNav } from "./NavStyle";
import INav from "../../interfaces/INav";

const Nav: React.FC<INav> = ({ open }): JSX.Element => {
  return (
    <ContainerNav open={ open }>
        <Link  to='/client-area'>
          Clientes
        </Link>
        <Link  to='/parts-area'>
          Peças
        </Link>      
        <Link 
          to='/Collaborator-area'
        >
          Area do Colaborador
        </Link>     
    </ContainerNav>
  )
}

export default Nav;
