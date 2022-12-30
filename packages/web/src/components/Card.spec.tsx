import renderer from "react-test-renderer";
import { default as Card } from "./Card";

test("Card exists"),
  () => {
    // @ts-expect-error - type
    const component = renderer.create(<Card />);
    const tree = component.toJSON();
    expect(tree).toBeTruthy();
  };
