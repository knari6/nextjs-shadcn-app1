import LinkButton from "@/components/ui/link-button";
import { Meta, StoryFn } from "@storybook/nextjs-vite";

export default {
  title: "components/ui/link-button",
  component: LinkButton,
  args: {
    label: "Link Button",
  },
} as Meta<typeof LinkButton>;

const Template: StoryFn<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
