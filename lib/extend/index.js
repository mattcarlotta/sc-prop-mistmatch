export const extend = (...f) =>
  f.reduce(
    (a, b) => (...args) => a(b(...args)),
    arg => arg
  );
