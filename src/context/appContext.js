import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './action';
import { reducer } from './reducer';

const initialState = {
  user: null,
  token: null,
  userLocation: '',
  jobLocation: '',
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
  // register user
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const res = await axios.post('/api/v1/auth/register', currentUser);
      const { user, token, location } = res.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
    } catch (error) {
      const {
        response: {
          data: { msg },
        },
      } = error;
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: msg },
      });
    }
    clearAlert();
  };
  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {/* The children is our application and this is what we rendering */}
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
