export interface PopoverItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "danger";
}
