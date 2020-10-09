export const IS_LOGGED = "IS_LOGGED";

export function getLoginInfo() {
  return {
    type: IS_LOGGED,
    payload: {
      isLogged: true
    }
  };
}
