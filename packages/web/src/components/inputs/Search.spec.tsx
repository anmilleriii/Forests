import renderer from "react-test-renderer";
import Card from "./Filter";

test("Card exists"),
  () => {
    // @ts-expect-error - type
    const component = renderer.create(<Card />);
    const tree = component.toJSON();
    expect(tree).toBeTruthy();
  };
