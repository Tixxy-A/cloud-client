
import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  HIDE_ALERT,
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
  UPDATE_PROVIDER_BEGIN,
  UPDATE_PROVIDER_ERROR,
  UPDATE_PROVIDER_SUCCESS,
  UPDATE_RESOURCES_BEGIN,
  UPDATE_RESOURCES_ERROR,
  UPDATE_RESOURCES_SUCCESS
} from "./actions";

export const reducer = (state, action) => {
  if(action.type === SET_USER_SLA){
    return {
      ...state,
      slaFormData: action.payload.slaFormData
    }
  }
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === SETUP_PROVIDER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (
    action.type === SETUP_ADMIN_BEGIN ||
    action.type === SUBSCRIBE_BEGIN || action.type === UPDATE_PROVIDER_BEGIN || action.type === UPDATE_RESOURCES_BEGIN
  ) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === SET_USER_REQUIREMENT) {
    return {
      ...state,
      userReq: action.payload.userReq,
    };
  } else if (action.type === SET_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: action.payload.alertType,
      alertText: action.payload.alertText,
    };
  } else if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
      userReq: null,
      token: null,
      subscribedTo: null,
    };
  } else if (action.type === LOGOUT_PROVIDER) {
    return {
      ...state,
      provider: null,
      token: null,
    };
  } else if (action.type === LOGOUT_ADMIN) {
    return {
      ...state,
      admin: null,
      token: null,
    };
  } else if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSideBar: !state.showSideBar,
    };
  } else if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
      token: action.payload.token,
    };
  } else if (action.type === SETUP_PROVIDER_SUCCESS) {
    return {
      ...state,
      provider: action.payload.provider,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
      token: action.payload.token,
    };
  } else if (action.type === SETUP_ADMIN_SUCCESS) {
    return {
      ...state,
      admin: action.payload.admin,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
      token: action.payload.token,
    };
  } else if (action.type === SUBSCRIBE_SUCCESS) {
    return {
      ...state,
      subscribedTo: action.payload.provider,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      userResources: action.payload.resources,
      alertText: action.payload.alertText,
      user: action.payload.user
    };
  } else if (action.type === UPDATE_RESOURCES_SUCCESS) {
   return {...state,
     user: action.payload.user,
     userResources: action.payload.resources,
     isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Resources updated successfully"
  }

  } else if(action.type === UPDATE_PROVIDER_SUCCESS){
    return {
      ...state,
      provider: action.payload.provider,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Updated details successfully"
    }
  }
  
  else if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: false,
      alertText: action.message,
    };
  } else if (action.type === SETUP_PROVIDER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: false,
      alertText: action.message,
    };
  } else if (action.type === SETUP_ADMIN_ERROR || action.type === UPDATE_PROVIDER_ERROR || action.type === UPDATE_RESOURCES_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: false,
      alertText: action.message,
    };
  } else if (action.type === SUBSCRIBE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: false,
      alertText: action.message,
    };
  } else if (action.type === HIDE_ALERT) {
    return {
      ...state,
      showAlert: false,
    };
  }
  return {
    ...state,
  };
};
