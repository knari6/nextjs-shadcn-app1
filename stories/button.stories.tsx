import { Meta, StoryFn } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";

export default {
  title: "components/ui/button",
  component: Button,
  args: {
    variant: "default",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>クリック</Button>
);

export const DefaultButton = Template.bind({});

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};
