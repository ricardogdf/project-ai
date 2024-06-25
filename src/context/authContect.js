import React, { createContext, useState, useContext } from 'react';
import Toast from '../components/Toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    Toast.success({
      message: "Login realizado com sucesso!",
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    Toast.success({
      message: "Logout realizado com sucesso!",
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};