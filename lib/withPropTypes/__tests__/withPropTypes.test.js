import PropTypes from "prop-types";
import { compose } from "~lib";
import { withPropTypes } from "../index";

const Button = compose.button(
  withPropTypes({
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  })
)`
  width: 100%;
`;

describe("WithPropTypes Function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Button type="button" onClick={() => {}}>
        Hello world
      </Button>
    );
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("throws warnings if props are invalid", () => {
    global.console.error = jest.fn();
    wrapper.setProps({ onClick: null });

    expect(global.console.error)
      .toHaveBeenCalledWith(`Warning: Failed prop type: The prop \`onClick\` is marked as required in \`compose\`, but its value is \`null\`.
    in compose`);

    global.console.error.mockRestore();
  });
});
