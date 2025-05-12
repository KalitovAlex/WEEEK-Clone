import { Button } from "@/shared/ui/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Primary Button",
    onClick: () => console.log("Primary button clicked"),
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    children: "Gradient Button",
    onClick: () => console.log("Gradient button clicked"),
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "large",
    isLoading: true,
  },
};
