const initState = {
  data: 'home'
}

const home = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_HOME_DATA':
      return initState
    case 'FETCH_DATA':
      return {
        ...state,
        newData: action.data
      }
    default:
      return state
  }
}

export default home
