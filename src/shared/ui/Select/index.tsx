import { useState, useRef, useEffect } from "react";
import type { SelectOption } from "@/shared/types/select";
import "./index.scss";
import { ChevronDown } from "lucide-react";
import i18n from "@/shared/i18n";

interface SelectProps {
  options: SelectOption[];
  onChange: (value: SelectOption) => void;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "filled";
}

export const Select = ({
  options,
  onChange,
  placeholder = i18n.t("select.placeholder"),
  size = "medium",
  variant = "filled",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`select-container ${size}`} ref={selectRef}>
      <div
        className={`select-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <span className="select-arrow">
          <ChevronDown scale={0.3} className={isOpen ? "active" : ""} />
        </span>
      </div>

      {isOpen && (
        <div className="select-dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-option ${
                selectedOption?.value === option.value ? "selected" : ""
              } ${variant === "filled" ? "filled" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
