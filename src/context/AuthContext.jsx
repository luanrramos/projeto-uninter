import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    type: 'guest',
    name: '',
    avatar: ''
  });

  const refreshUser = () => {
    const storedType = localStorage.getItem('userType');
    if (storedType) {
      setUser({
        type: storedType,
        name: localStorage.getItem('userName') || 'Usuário',
        avatar: localStorage.getItem('userAvatar') || 'https://i.pravatar.cc/150?img=32'
      });
    } else {
      setUser({ type: 'guest', name: '', avatar: '' });
    }
  };

  useEffect(() => {
    refreshUser();
    window.addEventListener('storage', refreshUser);
    return () => window.removeEventListener('storage', refreshUser);
  }, []);

  const login = (userData) => {
    localStorage.setItem('userType', userData.role);
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userAvatar', userData.avatar);
    refreshUser();
  };

  const logout = () => {
    localStorage.clear();
    refreshUser();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
