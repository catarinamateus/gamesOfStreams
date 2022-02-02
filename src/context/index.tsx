import React, {ReactNode} from 'react';
import {mockedUser} from '../data/mocks';
import {AppContextType, UserType} from './types';

const defaultContext: AppContextType = {
  user: undefined,
  totalPoints: 0,
  login: () => undefined,
  logout: () => undefined,
  setTotalPoints: () => undefined,
};

const AppContext = React.createContext(defaultContext);

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = React.useState<UserType | undefined>(mockedUser);
  const [totalPoints, setTotalPoints] = React.useState<number>(0);

  const login = (loggedUser: UserType) => {
    setUser(loggedUser);
  };

  const logout = () => {
    setUser(undefined);
  };

  const setPoints = (total: number) => {
    setTotalPoints(total);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        totalPoints,
        login,
        logout,
        setTotalPoints: setPoints,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const store = React.useContext(AppContext);
  return store;
};

export default AppContextProvider;
