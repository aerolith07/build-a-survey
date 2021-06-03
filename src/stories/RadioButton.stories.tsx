import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './Button';
import RadioButtonQ from '../components/SurveyComponents/questions/RadioQuestion';

export default {
  title: 'Example/Button',
  component: RadioButtonQ,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <RadioButtonQ {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
