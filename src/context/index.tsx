import React, {ReactNode} from 'react';
import {lastWatchedMock, mockedUser} from '../data/mocks';
import useDataClient from '../hooks/useDataClient';
import {AppContextType, UserLevelEnum, UserType} from './types';

const defaultContext: AppContextType = {
  user: undefined,
  totalPoints: 0,
  login: async () => undefined,
  logout: () => undefined,
  setTotalPoints: () => undefined,
  isLoading: false,
  setIsLoading: () => undefined,
};

const AppContext = React.createContext(defaultContext);

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = React.useState<UserType | undefined>(mockedUser);
  const [totalPoints, setTotalPoints] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {getUserDetails, getUserPoints, getLastWatched} = useDataClient();

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    const userData = await getUserDetails(username, password);
    const points = await getUserPoints('788638771');
    const lastWatched = await getLastWatched(username, password);

    if (userData) {
      setUser({
        id: userData.id,
        name: userData.displayName,
        level: UserLevelEnum.Master,
        email: userData.email,
        password, //never do this, only for demo :)
        image: userData.profile.image.images.avatar[0].url,
        lastWatched: lastWatched ? lastWatched : lastWatchedMock,
      });
    } else {
      //fallback in case api fails during demo
      setUser(mockedUser);
    }

    if (typeof points === 'number') {
      setPoints(points);
    }
    setIsLoading(false);
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
        isLoading,
        setIsLoading,
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
