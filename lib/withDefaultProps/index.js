import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDevelopment from "../inDevelopment";

export const withDefaultProps = props => BaseComponent => {
  const factory = createFactory(BaseComponent);

  const DefaultProps = ownerProps => factory(ownerProps);

  DefaultProps.defaultProps = props;

  return inDevelopment
    ? setDisplayName(wrapDisplayName(BaseComponent, "withDefaultProps"))(
        DefaultProps
      )
    : /* istanbul ignore next */ DefaultProps;
};
