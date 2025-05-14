import { Toggle } from "@/shared/ui/Toggle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  title: "Shared/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: "Toggle",
    checked: false,
    onChange: () => {},
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    label: "Toggle",
    checked: false,
    onChange: () => {},
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Toggle",
    checked: false,
    onChange: () => {},
    size: "large",
  },
};
