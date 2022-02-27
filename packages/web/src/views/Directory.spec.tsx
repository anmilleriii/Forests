import renderer from "react-test-renderer";
import Directory from "./Directory";

test("Directory exists"),
  () => {
    const component = renderer.create(<Directory />);
    const tree = component.toJSON();
    expect(tree).toBeTruthy();
  };
