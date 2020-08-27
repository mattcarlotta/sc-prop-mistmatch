import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inDevelopment from "../inDevelopment";

export const withAttributes = incomingAttributes => BaseComponent => {
  const extendedComponent = styled(BaseComponent).attrs(
    isFunc(incomingAttributes)
      ? props => incomingAttributes(props)
      : () => incomingAttributes
  )``;

  return inDevelopment
    ? setDisplayName(wrapDisplayName(BaseComponent, "withAttributes"))(
        extendedComponent
      )
    : /* istanbul ignore next */ extendedComponent;
};
