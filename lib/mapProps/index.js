import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDevelopment from "../inDevelopment";

export const mapProps = propsMapper => BaseComponent => {
  const MapProps = props => createFactory(BaseComponent)(propsMapper(props));

  return inDevelopment
    ? setDisplayName(wrapDisplayName(BaseComponent, "mapProps"))(MapProps)
    : /* istanbul ignore next */ MapProps;
};
