import { Input } from "@/shared/ui/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    placeholder: {
      control: "text",
    },
    className: {
      // wrapper className
      control: "text",
    },
    inputClassName: {
      // input element className
      control: "text",
    },
    value: { control: "text" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    filled: { control: "boolean" },
    clearable: { control: "boolean" },
    loading: { control: "boolean" },
    error: { control: "boolean" }, // Assuming error is a boolean to trigger a state
    onlyIcon: { control: "boolean" },
    iconLeft: { control: false }, // Disable control for iconLeft as we'll set it in args
    iconRight: { control: false }, // Disable control for iconRight
    addonRight: { control: false }, // Disable control for addonRight
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const WithValue: Story = {
  args: {
    type: "text",
    value: "Some value",
    placeholder: "Enter text...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
    value: "secret123",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    value: "Cannot edit",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    type: "text",
    placeholder: "Read-only input",
    value: "Cannot edit, but selectable",
    readOnly: true,
  },
};

export const Filled: Story = {
  args: {
    type: "text",
    placeholder: "Filled input...",
    value: "Has text",
    filled: true,
  },
};

export const Loading: Story = {
  args: {
    type: "text",
    placeholder: "Loading state...",
    value: "Loading...",
    loading: true,
  },
};

export const Clearable: Story = {
  args: {
    type: "text",
    placeholder: "Clearable input...",
    value: "Text to clear",
    clearable: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    type: "text",
    placeholder: "Input with left icon",
    iconLeft: "⚙️",
  },
};

export const WithIconRight: Story = {
  args: {
    type: "text",
    placeholder: "Input with right icon",
    iconRight: "⚙️",
  },
};

export const WithIconLeftAndClearable: Story = {
  args: {
    type: "text",
    placeholder: "Icon left & clearable",
    iconLeft: "⚙️",
    value: "Some text",
    clearable: true,
  },
};

export const WithAddonRight: Story = {
  args: {
    type: "text",
    placeholder: "Input with addon",
    value: "100",
    addonRight: "USD",
  },
};

export const ErrorState: Story = {
  args: {
    type: "text",
    placeholder: "Error state input",
    value: "Invalid value",
    error: true, // Assuming 'error' prop triggers error styling
  },
};

// --- Only Icon Stories ---
const commonOnlyIconArgs = {
  // onClick: () => alert("Icon Clicked!"), // Example action
};

export const OnlyIconDefault: Story = {
  name: "Icon Only / Default",
  args: {
    ...commonOnlyIconArgs,
    onlyIcon: true,
    iconLeft: "⚙️",
    title: "Settings", // For accessibility, if your component supports it
  },
};

export const OnlyIconRight: Story = {
  name: "Icon Only / Icon Right",
  args: {
    ...commonOnlyIconArgs,
    onlyIcon: true,
    iconRight: "✔️",
    title: "Confirm",
  },
};

export const OnlyIconFilled: Story = {
  name: "Icon Only / Filled",
  args: {
    ...commonOnlyIconArgs,
    onlyIcon: true,
    iconLeft: "⚙️",
    filled: true,
    title: "Filled Settings",
  },
};

export const OnlyIconLoading: Story = {
  name: "Icon Only / Loading",
  args: {
    ...commonOnlyIconArgs,
    onlyIcon: true,
    iconLeft: "⚙️", // Icon will be hidden by loader
    loading: true,
    title: "Loading Settings",
  },
};

export const OnlyIconDisabled: Story = {
  name: "Icon Only / Disabled",
  args: {
    ...commonOnlyIconArgs,
    onlyIcon: true,
    iconLeft: "⚙️",
    disabled: true,
    title: "Disabled Settings",
  },
};

export const OnlyIconFilledAndLoading: Story = {
  name: "Icon Only / Filled & Loading",
  args: {
    ...commonOnlyIconArgs,
    onlyIcon: true,
    iconLeft: "⚙️",
    filled: true,
    loading: true,
    title: "Loading Filled Settings",
  },
};
