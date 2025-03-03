import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Button from "./Button";

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
      layout: 'centered',
    },
  } satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};
