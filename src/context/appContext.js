import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer.js';
import axios from 'axios';
import {
  HIDE_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  SET_USER_REQUIREMENT,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  SET_ALERT,
  SETUP_PROVIDER_BEGIN,
  SETUP_PROVIDER_SUCCESS,
  SETUP_PROVIDER_ERROR,
  LOGOUT_PROVIDER,
  SETUP_ADMIN_BEGIN,
  SETUP_ADMIN_SUCCESS,
  SETUP_ADMIN_ERROR,
  LOGOUT_ADMIN,
  SUBSCRIBE_BEGIN,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_ERROR,
  SET_USER_SLA,
  UPDATE_RESOURCES_BEGIN,
  UPDATE_RESOURCES_SUCCESS,
  UPDATE_RESOURCES_ERROR,
  UPDATE_PROVIDER_BEGIN,
  UPDATE_PROVIDER_SUCCESS,
  UPDATE_PROVIDER_ERROR,
} from './actions.js';

const appContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  provider: null,
  admin: null,
  showSideBar: true,
  userResources: null,
  subscribedTo: null,
  token: '',
  slaFormData: {
    cpu_capacity: 'Extremely High/ Extremely Good (EH/EG)',
    memory_size: 'Extremely High/ Extremely Good (EH/EG)',
    boot_time: 'Extremely High/ Extremely Good (EH/EG)',
    scale_up: 'Extremely High/ Extremely Good (EH/EG)',
    scale_down: 'Extremely High/ Extremely Good (EH/EG)',
    scale_up_time: 'Extremely High/ Extremely Good (EH/EG)',
    scale_down_time: 'Extremely High/ Extremely Good (EH/EG)',
    max_vm_configure: 'Extremely High/ Extremely Good (EH/EG)',
    auto_scaling: 'Extremely High/ Extremely Good (EH/EG)',
    storage: 'Extremely High/ Extremely Good (EH/EG)',
  },
};

export const AppProvider = ({ children }) => {
  const init = () => {
    console.log('running');
    const user = localStorage.getItem('userStr');
    const provider = localStorage.getItem('providerStr');
    const admin = localStorage.getItem('adminStr');
    const token = localStorage.getItem('token');

    if (user) {
      const userObj = JSON.parse(user);
      initialState.user = userObj;
      const userResourcesStr = userObj.resources;
      const userResourcesObj =
        userResourcesStr.length > 0 ? JSON.parse(userResourcesStr) : null;
      initialState.userResources = userResourcesObj;
      const subscribeStr = userObj.subscribedTo;
      if (subscribeStr) {
        initialState.subscribedTo = JSON.parse(subscribeStr);
      }
    }
    if (provider) {
      const providerObj = JSON.parse(provider);
      initialState.provider = providerObj;
    }
    if (admin) {
      const adminObj = JSON.parse(admin);
      initialState.admin = adminObj;
    }
    if (token) {
      initialState.token = token;
    }
  };
  init();

  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = ({ alertType, alertText }) => {
    dispatch({
      type: SET_ALERT,
      payload: { alertType, alertText },
    });
    hideAlert();
  };
  const setSLAFormData = (slaFormData) => {
    dispatch({
      type: SET_USER_SLA,
      payload: {
        slaFormData,
      },
    });
  };

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
  };
  const setUserReq = (userReq) => {
    console.log('User req');
    console.log(userReq);
    dispatch({
      type: SET_USER_REQUIREMENT,
      payload: {
        userReq,
      },
    });
    localStorage.setItem('userReqStr', JSON.stringify(userReq));
  };
  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const updateResources = async (resources) => {
    dispatch({
      type: UPDATE_RESOURCES_BEGIN,
    });

    try {
      const response = await axios.patch(
        'http://localhost:5000/api/v1/user/updateResources',
        {
          providerId: state.subscribedTo._id,
          resources,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      console.log(response);
      if (!response || response.name === 'AxiosError') {
        if (!response) throw new Error(response.message);
        else throw new Error(response.data.message);
      }
      const { user } = await response.data.data;
      dispatch({
        type: UPDATE_RESOURCES_SUCCESS,
        payload: {
          resources,
          user,
        },
      });
    } catch (error) {
      console.log(error);
      let errMess = error.message;
      if (error.response) errMess = error.response.data.message;
      dispatch({
        type: UPDATE_RESOURCES_ERROR,
        message: errMess,
      });
    }
    hideAlert();
  };
  const updateProvider = async (newProvider) => {
    dispatch({
      type: UPDATE_PROVIDER_BEGIN,
    });

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/provider/updateDetails/${state.provider._id}`,
        {
          newProvider,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      console.log(response);
      if (!response || response.name === 'AxiosError') {
        if (!response) throw new Error(response.message);
        else throw new Error(response.data.message);
      }
      const { provider } = await response.data.data;
      dispatch({
        type: UPDATE_PROVIDER_SUCCESS,
        payload: {
          provider,
        },
      });
    } catch (error) {
      console.log(error);
      let errMess = error.message;
      if (error.response) errMess = error.response.data.message;
      dispatch({
        type: UPDATE_PROVIDER_ERROR,
        message: errMess,
      });
    }
    hideAlert();
  };
  const setUpUser = async ({ currentUser, endpoint, alertText }) => {
    dispatch({
      type: SETUP_USER_BEGIN,
    });

    try {
      console.log(currentUser);
      const response = await axios.post(
        `http://localhost:5000/api/v1/auth/${endpoint}`,
        currentUser
      );

      console.log(response);
      if (!response || response.name === 'AxiosError') {
        if (!response) throw new Error(response.message);
        else throw new Error(response.data.message);
      }
      const { user, token } = await response.data.data;
      // console.log(user);
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          user,
          alertText,
          token,
        },
      });
      localStorage.setItem('userStr', JSON.stringify(user));
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
      let errMess = error.message;
      if (error.response) errMess = error.response.data.message;
      dispatch({
        type: SETUP_USER_ERROR,
        message: errMess,
      });
    }

    hideAlert();
  };
  const setUpAdmin = async ({ currentAdmin, endpoint, alertText }) => {
    dispatch({
      type: SETUP_ADMIN_BEGIN,
    });

    try {
      console.log(currentAdmin);
      const response = await axios.post(
        `http://localhost:5000/api/v1/admin/${endpoint}`,
        currentAdmin
      );

      console.log(response);
      if (!response || response.name === 'AxiosError') {
        if (!response) throw new Error(response.message);
        else throw new Error(response.data.message);
      }
      const { admin, token } = await response.data.data;
      // console.log(user);
      dispatch({
        type: SETUP_ADMIN_SUCCESS,
        payload: {
          admin,
          alertText,
          token,
        },
      });

      localStorage.setItem('adminStr', JSON.stringify(admin));
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
      let errMess = error.message;
      if (error.response) errMess = error.response.data.message;
      dispatch({
        type: SETUP_ADMIN_ERROR,
        message: errMess,
      });
    }

    hideAlert();
  };
  const subscribeTo = async (provider) => {
    dispatch({
      type: SUBSCRIBE_BEGIN,
    });

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/user/subscribe/${state.user._id}`,
        { providerId: provider._id },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (!response || response.name === 'AxiosError') {
        if (!response) throw new Error(response.message);
        else throw new Error(response.data.message);
      }
      // console.log(response);
      const { resources, user } = response.data.data;
      dispatch({
        type: SUBSCRIBE_SUCCESS,
        payload: {
          provider,
          resources,
          alertText: 'Subscibed successfully! Redirecting...',
          user,
        },
      });
      localStorage.setItem('subscribedTo', JSON.stringify(provider));
      localStorage.setItem('userStr', JSON.stringify(user));
    } catch (error) {
      console.log(error);
      let errMess = error.message;
      if (error.response) errMess = error.response.data.message;
      dispatch({
        type: SUBSCRIBE_ERROR,
        message: errMess,
      });
    }
    hideAlert();
  };

  const setUpProvider = async ({ currentProvider, endpoint, alertText }) => {
    dispatch({
      type: SETUP_PROVIDER_BEGIN,
    });

    try {
      console.log(currentProvider);
      const response = await axios.post(
        `http://localhost:5000/api/v1/auth/${endpoint}`,
        currentProvider
      );

      console.log('res' + response);
      const { provider, token } = await response.data.data;
      // console.log(user);
      dispatch({
        type: SETUP_PROVIDER_SUCCESS,
        payload: {
          provider,
          alertText,
          token,
        },
      });
      localStorage.setItem('providerStr', JSON.stringify(provider));
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
      let errMess = error.message;
      if (error.response) errMess = error.response.data.message;
      dispatch({
        type: SETUP_PROVIDER_ERROR,
        message: errMess,
      });
    }

    hideAlert();
  };

  const registerUser = (currentUser) => {
    setUpUser({
      currentUser,
      endpoint: 'register',
      alertText: 'Registeration Complete! redirecting...',
    });
  };

  const logInUser = (currentUser) => {
    setUpUser({
      currentUser,
      endpoint: 'login',
      alertText: 'Logged in successfully! redirecting...',
    });
  };

  const logoutUser = () => {
    localStorage.removeItem('userStr');
    localStorage.removeItem('userReqStr');
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT_USER,
    });
  };

  const registerProvider = (currentProvider) => {
    setUpProvider({
      currentProvider,
      endpoint: 'registerProvider',
      alertText: 'Registeration Complete! redirecting...',
    });
  };
  const registerAdmin = (currentAdmin) => {
    setUpAdmin({
      currentAdmin,
      endpoint: 'registerAdmin',
      alertText: 'Registeration Complete! redirecting...',
    });
  };

  const logInProvider = (currentProvider) => {
    setUpProvider({
      currentProvider,
      endpoint: 'loginProvider',
      alertText: 'Logged in successfully! redirecting...',
    });
  };
  const logInAdmin = (currentAdmin) => {
    console.log(currentAdmin);
    setUpAdmin({
      currentAdmin,
      endpoint: 'login',
      alertText: 'Logged in successfully! redirecting...',
    });
  };

  const logoutProvider = () => {
    localStorage.removeItem('providerStr');
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT_PROVIDER,
    });
  };

  const logoutAdmin = () => {
    localStorage.removeItem('adminStr');
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT_ADMIN,
    });
  };
  const fetchAllProviders = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/v1/user/getAllProviders',
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      if (!response || !response.data) {
        throw new Error(response.message);
      }

      const { providers } = response.data.data;
      //console.log(providers);
      if (providers.length === 0) return [];
      return providers;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  return (
    <appContext.Provider
      value={{
        ...state,
        logInUser,
        registerUser,
        displayAlert,
        setUserReq,
        toggleSideBar,
        logoutUser,
        registerProvider,
        logInProvider,
        logoutProvider,
        registerAdmin,
        logInAdmin,
        logoutAdmin,
        subscribeTo,
        fetchAllProviders,
        setSLAFormData,
        updateResources,
        updateProvider,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
