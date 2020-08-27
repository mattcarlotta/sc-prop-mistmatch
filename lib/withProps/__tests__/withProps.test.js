import { compose, extend } from "~lib";
import { withProps } from "../index";

const Input = compose.input(withProps({ type: "text", "data-name": "input" }))`
  width: 100%;
`;

const ExtendInput = extend(withProps({ "data-name": "extend-input" }))(Input);

const InteropInput = extend(
  withProps(props => ({ type: props.email ? "email" : "password" }))
)(Input);

describe("WithProps Function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <>
        <Input />
        <ExtendInput />
        <InteropInput email />
      </>
    );
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("creates component props", () => {
    const inputNode = wrapper.find("input").first();
    expect(inputNode.props().type).toEqual("text");
  });

  it("extends component props", () => {
    const extendInputNode = wrapper.find("input").at(1);
    expect(extendInputNode.props().type).toEqual("text");
    expect(extendInputNode.props()["data-name"]).toEqual("extend-input");
  });

  it("interops component props", () => {
    const interopInputNode = wrapper.find("input").at(2);
    expect(interopInputNode.props().type).toEqual("email");
  });
});
