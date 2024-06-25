import React from 'react';
import Toast from '../components/Toast';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    // Carregar o estado de autenticação do localStorage
    const userId = localStorage.getItem('userId');
    if (userId && userId !== undefined) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userId) => {
    localStorage.setItem('userId', userId);
    setIsAuthenticated(true);
    Toast.success({
      message: "Login realizado com sucesso!",
    });
  };

  const logout = () => {
    localStorage.removeItem('userId');
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
  return React.useContext(AuthContext);
};