const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const value = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return value;
};

export default logger;
