export default function auth(state = {}, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
}
