import React from "react";
import {MyInput} from "./InputTask";

export default {
  component: MyInput,
  title: "InputTask",
};

const Template = (args) => <MyInput {...args}/>;

export const Default = Template.bind({});
Default.args = {
  placeHolder:"Write a new task",
  text: "add Task",
  state: false
}

export const NoAvailable = Template.bind({});
NoAvailable.args = {
  placeHolder: "Sorry, the list is full",
  text: "unavailable",
  state: true
}