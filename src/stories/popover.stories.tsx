import { Button } from "@/shared/ui/Button";
import { Popover } from "@/shared/ui/Popover";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  title: "Shared/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: <Button>Click me</Button>,
    items: [
      { label: "Item 1", value: "item1" },
      { label: "Item 2", value: "item2" },
      { label: "Item 3", value: "item3" },
    ],
  },
};
