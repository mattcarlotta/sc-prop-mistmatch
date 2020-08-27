import { compose, extend } from "~lib";
import { withAttributes } from "../index";

const Input = compose.input(
  withAttributes({ type: "text", "data-name": "input" })
)`
  width: 100%;
`;

const ExtendInput = extend(withAttributes({ "data-name": "extend-input" }))(
  Input
);

const InteropInput = extend(
  withAttributes(props => ({ type: props.email ? "email" : "password" }))
)(Input);

describe("WithAttributes Function", () => {
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

  it("creates component DOM attributes", () => {
    const inputNode = wrapper.find("input").first();
    expect(inputNode.props().type).toEqual("text");
  });

  it("extends component DOM attributes", () => {
    const extendInputNode = wrapper.find("input").at(1);
    expect(extendInputNode.props().type).toEqual("text");
    expect(extendInputNode.props()["data-name"]).toEqual("extend-input");
  });

  it("interops component DOM attributes", () => {
    const interopInputNode = wrapper.find("input").at(2);
    expect(interopInputNode.props().type).toEqual("email");
  });
});
