import { ReactNode, useState } from 'react';
import providerFile from './contex'

const provider = ({ children }: { children: ReactNode}) => {
  const [open, setOpen] = useState(false);

  const contextObj = {
    open,
    setOpen,
  }

  return (
    <providerFile.Provider value={ contextObj }>
      {children}
    </providerFile.Provider>
  );
}

export default provider;