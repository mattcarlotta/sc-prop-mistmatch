import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inDevelopment from "../inDevelopment";

export const withStyles = incomingStyles => BaseComponent => {
  const extendedComponent = styled(BaseComponent)`
    ${isFunc(incomingStyles)
      ? props => incomingStyles(props)
      : () => incomingStyles};
  `;

  return inDevelopment
    ? setDisplayName(wrapDisplayName(BaseComponent, "withStyles"))(
        extendedComponent
      )
    : /* istanbul ignore next */ extendedComponent;
};
