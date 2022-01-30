//AuthContext.js
import React, {createContext, Dispatch, ReactNode, useContext, useState} from 'react';
import api from '../services/api';

interface AuthContextProviderProps {
    children: ReactNode
}

interface AuthStateProps {
    accessToken: string | null;
    refreshToken: string | null;
    authenticated: boolean;
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
    email: string;
    password: string;
}

const AuthContext = createContext({} as AuthContextData);
export function AuthContextProvider({children}: AuthContextProviderProps){
  const [authState, setAuthState] = useState<AuthStateProps>({
    accessToken: null,
    refreshToken: null,
    authenticated: false,
  });

  const login = async (props: LoginProps) => {
      const params: ParamsProps = {email: props.email, password: props.password}
      let logado = false;
      await api.post('token/', params).then(response => {
        const token = response.data.access
        const refresh = response.data.refresh
        setAuthState({
          accessToken: token,
          refreshToken: refresh,
          authenticated: true,
        });
        logado = true
      }).catch(error => console.log(error))

      console.log('o user está logado :', logado)
      return logado
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