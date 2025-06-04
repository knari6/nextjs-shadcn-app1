import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Meta, StoryFn } from "@storybook/nextjs-vite";
import clsx from "clsx";

export default {
  title: "components/ui/carousel",
  component: Carousel,
  args: {
    orientation: "horizontal",
  },
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = () => (
  <Carousel className={clsx("w-full", "max-w-xs")}>
    <CarouselPrevious />
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className={clsx("p-1")}>
            <Card>
              <CardContent
                className={clsx(
                  "flex",
                  "aspect-square",
                  "items-center",
                  "justify-center",
                  "p-6"
                )}
              >
                <span className={clsx("text-4xl", "font-semibold")}>
                  {index + 1}
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselNext />
  </Carousel>
);

export const DefaultCarousel = Template.bind({});
