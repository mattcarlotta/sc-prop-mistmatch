import { createFactory } from "../createFactory";
import { getDisplayName } from "../displayName";
import inDevelopment from "../inDevelopment";

export const nest = (...Components) => {
  const factories = Components.map(createFactory);
  const Nest = ({ children, ...props }) =>
    factories.reduceRight((child, factory) => factory(props, child), children);

  /* istanbul ignore next */
  if (inDevelopment) {
    const displayNames = Components.map(getDisplayName);
    Nest.displayName = `nest(${displayNames.join(", ")})`;
  }

  return Nest;
};
