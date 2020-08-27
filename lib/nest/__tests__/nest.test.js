import { compose } from "~lib";
import { nest } from "../index";

const Container = compose.main()`
  padding: 20px;
`;

const Body = compose.div()`
  margin: 0;
  padding: 0;
`;

const Title = compose.h1()`
  text-decoration: uppercase;
`;

const ContainedBodyTitle = nest(Container, Body, Title);

describe("Nest Function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ContainedBodyTitle />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
    expect(wrapper.find("main")).toExist();
    expect(wrapper.find("div")).toExist();
    expect(wrapper.find("h1")).toExist();
  });

  it("nests components from left to right", () => {
    expect(wrapper.find(Container).find(Body).find(Title)).toExist();
  });
});
