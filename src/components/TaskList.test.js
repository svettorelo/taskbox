import {render} from "@testing-library/react";
import {composeStories} from "@storybook/testing-react";
import * as TaskListStories from "./TaskList.stories";

const {Pinned} = composeStories(TaskListStories);
it("Renders pinned tasks at the beginning of the list", () => {
  const {container} = render(<Pinned/>);
  expect(container.querySelector('.list-item:nth-child(1) input[value="Task 1 (pinned)"]')
  ).not.toBe(null);
  expect(container.querySelector('.list-item:nth-child(2) input[value="Task 6 (pinned)"]')
  ).not.toBe(null);
});