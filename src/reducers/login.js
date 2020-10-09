import { IS_LOGGED } from "../actions";

const initialStateLogin = {
  isLogged: false
};

const LoginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload.isLogged
      };
    default:
      console.log(state);
      return state;
  }
};

export default LoginReducer;
