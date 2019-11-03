
const initState = false;

let isDisplayLogin = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_LOGIN":
      return true;
    case "CLOSE_LOGIN":
      return false;
    default:
      return state;
  }
};
export default isDisplayLogin;
