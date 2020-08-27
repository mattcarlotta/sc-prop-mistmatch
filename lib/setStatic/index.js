export const setStatic = (key, value) => BaseComponent => {
  BaseComponent[key] = value;
  return BaseComponent;
};
