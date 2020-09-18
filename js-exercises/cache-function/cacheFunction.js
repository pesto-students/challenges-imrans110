function cacheFunction(fn) {
  const cachedValues = {};
  return (args) => {
    if (args in cachedValues) {
      return cachedValues[args];
    }
    cachedValues[args] = fn(args);
    return cachedValues[args];
  };
}

export { cacheFunction };
