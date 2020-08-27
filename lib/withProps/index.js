import { mapProps } from "../mapProps";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inDevelopment from "../inDevelopment";

export const withProps = incomingProps => BaseComponent => {
  const extraProps = isFunc(BaseComponent) ? BaseComponent().props : {};

  const hoc = mapProps(props => ({
    ...(isFunc(incomingProps)
      ? incomingProps({
          ...props,
          ...extraProps
        })
      : incomingProps),
    ...props
  }));

  return inDevelopment
    ? setDisplayName(wrapDisplayName(BaseComponent, "withProps"))(
        hoc(BaseComponent)
      )
    : /* istanbul ignore next */ hoc(BaseComponent);
};
