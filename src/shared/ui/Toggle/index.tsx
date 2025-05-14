import "./index.scss";

export interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: "small" | "medium" | "large";
}

export const Toggle = ({
  label,
  checked,
  onChange,
  size = "medium",
}: ToggleProps) => {
  return (
    <button
      key={label}
      className={`toggle ${checked ? "active" : ""} ${size}`}
      onClick={() => onChange(!checked)}
      type="button"
    >
      {label}
    </button>
  );
};
