import React, {ReactNode} from 'react';
import {mockedUser} from '../data/mocks';
import {AppContextType, UserType} from './types';

const defaultContext: AppContextType = {
  user: undefined,
  login: () => undefined,
  logout: () => undefined,
};

const AppContext = React.createContext(defaultContext);

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = React.useState<UserType | undefined>(mockedUser);

  const login = (loggedUser: UserType) => {
    setUser(loggedUser);
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <AppContext.Provider value={{user, login, logout}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const store = React.useContext(AppContext);
  return store;
};

export default AppContextProvider;
