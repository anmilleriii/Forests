import renderer from "react-test-renderer";
import Header from "./Header";

test("Header exists"),
  () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toBeTruthy();
  };
