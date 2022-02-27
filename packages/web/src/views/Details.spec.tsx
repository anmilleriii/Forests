import renderer from "react-test-renderer";
import Details from "./Details";

test("Details exists"),
  () => {
    const component = renderer.create(<Details />);
    const tree = component.toJSON();
    expect(tree).toBeTruthy();
  };
