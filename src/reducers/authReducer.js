import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';
import Asyncstorage from '@react-native-async-storage/async-storage';
// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      Asyncstorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;