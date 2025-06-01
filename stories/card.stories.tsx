import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Meta, StoryFn } from "@storybook/nextjs-vite";
import clsx from "clsx";

export default {
  title: "component/ui/card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = () => (
  <Card className={clsx("w-150", "mx-auto")}>
    <div className={clsx("w-4/5", "mx-auto")}>
      <CardHeader>
        <CardTitle>ログイン</CardTitle>
        <CardDescription>
          メールアドレスとパスワードを入力してください
        </CardDescription>
        <CardAction>
          <Button>ログイン</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className={clsx("flex", "flex-col", "gap-6")}>
            <div className={clsx("grid", "gap-2")}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={clsx("flex-col", "gap-2")}>
        <Button type="submit" className={clsx("w-40", "mt-6")}>
          Login with Google
        </Button>
      </CardFooter>
    </div>
  </Card>
);

export const DefaultCard = Template.bind({});
