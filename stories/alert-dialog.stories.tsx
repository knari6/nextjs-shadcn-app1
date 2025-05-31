import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Meta, StoryFn } from "@storybook/nextjs-vite";

export default {
  title: "components/ui/alert-dialog",
  component: AlertDialog,
} as Meta<typeof AlertDialog>;

const Template: StoryFn<typeof AlertDialog> = () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <Button>クリック</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>あああああ</AlertDialogTitle>
        <AlertDialogDescription>いいいいいい</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>キャンセル</AlertDialogCancel>
        <AlertDialogAction>あくしょん</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const DefaultAlertDialog = Template.bind({});
