import renderer from "react-test-renderer";
import Card from "./Filter";

test("Card exists"),
  () => {
    const component = renderer.create(<Card />);
    const tree = component.toJSON();
    expect(tree).toBeTruthy();
  };
