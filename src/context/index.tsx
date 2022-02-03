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
    try {
      const userData = await getUserDetails(username, password);
      const lastWatched = await getLastWatched(username, password);

      if (userData) {
        setUser({
          id: userData.id,
          name: userData.displayName,
          level: UserLevelEnum.Master,
          email: userData.email,
          password, //never do this, only for demo :)
          image: userData.profile.image.images.avatar[0].url,
          lastWatched: lastWatched ? lastWatched : lastWatchedMock, //fallback in case api fails during demo
        });
      } else {
        //fallback in case api fails during demo
        setUser(mockedUser);
      }

      const points = await getUserPoints(userData?.id || '788638771'); //fallback in case api fails during demo

      if (typeof points === 'number') {
        setPoints(points);
      }
      setIsLoading(false);
    } catch (e) {
      console.log('Error fetching user data', e);
      setUser(mockedUser);
      setIsLoading(false);
    }
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
