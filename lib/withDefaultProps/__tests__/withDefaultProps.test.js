import { compose } from "~lib";
import { withDefaultProps } from "../index";

const onClick = jest.fn();

const Button = compose.button(
  withDefaultProps({ type: "button", onClick, children: "Hello world" })
)`
  width: 100%;
`;

describe("WithDefaultProps Function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Button />);
  });

  afterEach(() => {
    onClick.mockClear();
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("assigns defaultProps to component", () => {
    const buttonNode = wrapper.find("button").first();
    buttonNode.simulate("click");

    expect(buttonNode.props().type).toEqual("button");
    expect(buttonNode.text()).toEqual("Hello world");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
