import Button from './Button'
const Template = () => `<fds-button label="Label"></fds-button>`;

export default {
  component: Button,
  title: "Components/Button",
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'centered', 
  },
};

export const Primary = Template.bind({});