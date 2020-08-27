import { compose, withAttributes } from "~lib";
import { extend } from "../index";

const Input = compose.input(
  withAttributes({ type: "text", "data-name": "input" })
)`
  width: 100%;
`;

const ExtendedInput = extend(withAttributes({ type: "password" }))(Input);

describe("Extend Function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <>
        <Input />
        <ExtendedInput />
      </>
    );
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("extends component properties", () => {
    const inputNode = wrapper.find("input").first();
    expect(inputNode.props().type).toEqual("text");
    expect(inputNode.props()["data-name"]).toEqual("input");

    const extendedInputNode = wrapper.find("input").at(1);
    expect(extendedInputNode.props().type).toEqual("password");
    expect(extendedInputNode.props()["data-name"]).toEqual("input");
  });
});
