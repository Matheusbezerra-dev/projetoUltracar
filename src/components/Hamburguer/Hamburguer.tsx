import React, { useContext } from 'react'
import provider from '../../context/contex';
import Nav from '../Nav/Nav';
import { ConatinerHamburgue } from './HamburguerStyle';



const Hamburgue = (): JSX.Element => {
  const { open, setOpen } = useContext(provider);

  return (
    <>
      <ConatinerHamburgue open={ open } onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </ConatinerHamburgue>
      <Nav open={ open } />
    </>
  ) 
}

export default Hamburgue;
