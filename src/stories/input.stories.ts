import { Input } from "@/shared/ui/Input";
import type { Meta } from "@storybook/react";
import type { ComponentProps } from "react";

type Story = ComponentProps<typeof Input>;

const meta: Meta<Story> = {
  title: "Input",
  component: Input,
};

export default meta;
