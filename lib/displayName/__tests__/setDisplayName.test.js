import { compose } from "~lib";
import { setDisplayName } from "../index";

const Component = compose.h1(setDisplayName("CustomDisplayName"))`
  width: 100%;
  height: 100%;
`;

describe("SetDisplayName Function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Component />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("creates Component properties", () => {
    expect(wrapper).toHaveDisplayName("CustomDisplayName");
    expect(Component.target).toEqual("h1");
    expect(Component.styledComponentId).toBeDefined();
  });
});
