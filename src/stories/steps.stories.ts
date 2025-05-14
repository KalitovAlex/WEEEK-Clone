import { Steps } from "@/shared/ui/Steps";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Steps> = {
  title: "Shared/Steps",
  component: Steps,
  tags: ["autodocs"],
  argTypes: {
    stepsCount: {
      control: "number",
    },
    currentStep: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    stepsCount: 3,
    currentStep: 1,
  },
};

export const Active: Story = {
  args: {
    stepsCount: 3,
    currentStep: 2,
  },
};
