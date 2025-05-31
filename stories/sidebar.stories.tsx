import { Sidebar } from "@/components/ui/sidebar";
import { Meta, StoryFn } from "@storybook/nextjs-vite";

export default {
  title: "components/ui/sidebar",
  components: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = () => <Sidebar />;

export const DefaultSidebar = Template.bind({});
