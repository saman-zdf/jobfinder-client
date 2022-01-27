import React, { useState, useReducer, useContext } from 'react';
import { DISPLAY_ALERT, CLEAR_ALERT } from './action';
import { reducer } from './reducer';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {/* The children is our application and this is what we rendering */}
      {children}
    </AppContext.Provider>
  );
};

const useAppConntext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppConntext };
