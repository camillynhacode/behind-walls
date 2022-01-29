//AuthContext.js
import React, {createContext, Dispatch, ReactNode, useContext, useState} from 'react';
import api from '../services/api';

interface AuthContextProviderProps {
    children: ReactNode
}

interface AuthStateProps {
    accessToken: string | null;
    refreshToken: string | null;
    authenticated: boolean | null;
}

interface LoginProps {
  email: string,
  password: string
}

interface AuthContextData {
    authState: AuthStateProps;
    setAuthState: Dispatch<React.SetStateAction<AuthStateProps>>
    login: (props: LoginProps) => Promise<boolean>;
    logout: () => void;
}

interface ParamsProps {
    username: string;
    password: string;
}

const AuthContext = createContext({} as AuthContextData);
export function AuthContextProvider({children}: AuthContextProviderProps){
  const [authState, setAuthState] = useState<AuthStateProps>({
    accessToken: null,
    refreshToken: null,
    authenticated: null,
  });

  const login = async (props: LoginProps) => {
      const params: ParamsProps = {username: props.email, password: props.password}
      const response = await api.post('token/', params)

      const token = response.data.access
      const refresh = response.data.refresh
      if(response.status!=200){
          return false
      }
      setAuthState({
        accessToken: token,
        refreshToken: refresh,
        authenticated: true,
      });
      return true
  }

  const logout = async () => {
    setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false,
    });
  };


  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
    return useContext(AuthContext);
}