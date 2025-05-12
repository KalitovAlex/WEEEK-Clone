import { Button } from "@/shared/ui/Button";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

type Story = ComponentProps<typeof Button>;

const meta: Meta<Story> = {
  title: "Button",
  component: Button,
};

export default meta;

type StoryType = StoryObj<Story>;

export const Primary: StoryType = {
  args: {
    variant: "primary",
    size: "large",
    children: "Click me",
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const Gradient: StoryType = {
  args: {
    variant: "gradient",
    children: "Click me",
    onClick: () => {
      console.log("clicked");
    },
  },
};
