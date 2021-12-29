import React from "react";
import {MyButton} from "./Button";

export default {
  component: MyButton,
  title: "Button",
}

const Template = (args) => <MyButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  text: "add Task",
  state: false
}
export const Disabled = Template.bind({});
Disabled.args = {
  text: "disabled",
  state: true
}
