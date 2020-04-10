const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: { token },
});

const removeToken = () => ({
  type: 'SET_TOKEN',
  payload: { token: null },
});

export {
  setToken,
  removeToken,
};
