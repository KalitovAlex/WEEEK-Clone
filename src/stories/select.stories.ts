import { Select } from "@/shared/ui/Select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Shared/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    onChange: () => {},
    variant: "default",
  },
};

export const Filled: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    onChange: () => {},
    variant: "filled",
  },
};
