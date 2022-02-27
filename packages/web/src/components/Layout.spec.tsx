import renderer from "react-test-renderer";
import Layout from "./Layout";

test("Layout renders topbar"),
  () => {
    const component = renderer.create(<Layout />);
    const tree = component.toJSON();
    expect(tree).toBeTruthy();
  };
