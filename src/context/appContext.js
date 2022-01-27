import React, { useState, useRedure, useContext } from 'react';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}>
      {/* The children is our application and this is what we rendering */}
      {children}
    </AppContext.Provider>
  );
};

const useAppConntext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppConntext };
