import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Action
} from './Action';
import { navigationActions } from "./mocks/navActions";
const avatarAction = navigationActions.find((a: any) => a.key === 'Avatar');
const loginAction = navigationActions.find((a: any) => a.key === 'Login');

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Action",
  component: Action,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Action>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Action> = (args: any) => <Action {...args} />;

export const PopoverNavigationAction = Template.bind({});
PopoverNavigationAction.args = {
  action: avatarAction
};

export const ModalNavigationAction = Template.bind({});
ModalNavigationAction.args = {
  action: loginAction
};
