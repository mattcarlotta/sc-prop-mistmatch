import { compose, setDisplayName } from "composable-styled-components";

const Headline = compose.h1(setDisplayName("Headline"))`
  transition: all 200ms ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  outline: none;
  cursor: pointer;
  color: ${({ color }) => color || "#03a9f3"};

  &:hover {
    color: #f1f1f1;
  }
`;

export default Headline;
