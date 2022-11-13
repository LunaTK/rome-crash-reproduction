const outer = (callback: (fn: VoidFunction) => void) => {
  const inner = () => {
    callback(inner);
  };
};
