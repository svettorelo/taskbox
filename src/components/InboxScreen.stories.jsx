import React from "react";
import {PureInboxScreen} from "./InboxScreen";
import {Provider} from "react-redux";
import {configureStore,createSlice} from "@reduxjs/toolkit";
import * as TaskListStories from "./TaskList.stories";
import {fireEvent,within} from "@storybook/testing-library";

const MockStore = configureStore({
  reducer: {
    tasks: createSlice({
      name: "tasks",
      initialState: TaskListStories.Default.args.tasks,
      reducers: {
        updateTaskState: (state,action) => {
          const {id,newTaskState} = action.payload;
          const task = state.findIndex(t => t.id===id);
          if (task>=0) state[task].state = newTaskState;
        }
      }
    }).reducer
  }
});

export default {
  title: "PureInboxScreen",
  component: PureInboxScreen,
  decorators: [story => <Provider store={MockStore}>{story()}</Provider>]
}

const Template = (args) => <PureInboxScreen {...args}/>

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error:"Some error"
};

export const WithInteractions = Template.bind({});
WithInteractions.play = ({canvasElement}) => {
  const canvas = within(canvasElement);
  //simulations of pinning
  fireEvent.click(canvas.getByLabelText("pinTask-2"));
  fireEvent.click(canvas.getByLabelText("pinTask-4"));
};
