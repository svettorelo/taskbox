import {render} from "@testing-library/react";
import {composeStories} from "@storybook/testing-react";
import * as InboxScreenStories from "./InboxScreen.stories";

const {Error} = composeStories(InboxScreenStories);
it("Renders an icon of a sad face if there is an error", () => {
  const {container} = render(<Error/>);
  expect(container.getElementsByClassName("icon-face-sad")).toHaveLength(1);
});
