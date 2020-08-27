import styled, { css } from "styled-components";
import { extend } from "../extend";
import domElements from "../domElements";

const compose = t => (...f) => (...s) =>
  extend(...f)(styled(t)`
    ${() => css(...s)};
  `);

domElements.forEach(domElement => {
  compose[domElement] = compose(domElement);
});

export { compose };
