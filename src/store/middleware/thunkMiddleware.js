export const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(dispatch);
  }
};
