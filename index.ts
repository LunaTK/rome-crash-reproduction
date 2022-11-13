type Func = (callback: Func) => void;

// this doesn't kill rome
const fn = (callback: Func) => {
  callback(fn);
};

const romeKiller = () => {
  const fn = (callback: Func) => {
    // NOTE : uncommenting the below line will crash rome.
    // callback(fn);
  };
};
