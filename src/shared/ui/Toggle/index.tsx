import "./index.scss";

export interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle = ({ label, checked, onChange }: ToggleProps) => {
  return (
    <button
      key={label}
      className={`toggle ${checked ? "active" : ""}`}
      onClick={() => onChange(!checked)}
      type="button"
    >
      {label}
    </button>
  );
};
