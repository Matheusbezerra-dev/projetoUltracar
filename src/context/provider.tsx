import { ReactNode } from 'react';
import providerFile from './contex'

const provider = ({ children }: { children: ReactNode}) => {
  const contextObj = {

  }
  return (
    <providerFile.Provider value={ contextObj }>
        {children}
      </providerFile.Provider>
  );
}

export default provider;