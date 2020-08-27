import { setStatic } from "../setStatic";

const getDisplayName = Component => Component.displayName;

const setDisplayName = displayName => setStatic("displayName", displayName);

const wrapDisplayName = (BaseComponent, hocName) =>
  `${hocName}(${getDisplayName(BaseComponent)})`;

export { getDisplayName, setDisplayName, wrapDisplayName };
