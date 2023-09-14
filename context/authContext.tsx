import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
    token: string;
    isAuthenticated: boolean;
    authenticate: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
})

const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState('');

    const authenticate = (token: string) => {
        setAuthToken(token);
        AsyncStorage.setItem('token', token)
    }

    const logout = () => {
        setAuthToken(null);
        AsyncStorage.removeItem('token')
    }

    const value: AuthContextType = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;