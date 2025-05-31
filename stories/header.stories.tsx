import Header from "@/components/ui/header";
import { Meta, StoryFn } from "@storybook/nextjs-vite";

export default {
  title: "components/ui/header",
  components: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const DefaultHeader = Template.bind({});
