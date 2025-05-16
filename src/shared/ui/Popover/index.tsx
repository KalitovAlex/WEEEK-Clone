import type { PopoverItem } from "@/shared/types/popover";
import { useEffect, useState } from "react";
import "./index.scss";
import classNames from "classnames";

interface PopoverProps {
  children: React.ReactNode;
  variant?: "filled" | "default";
  items: PopoverItem[];
  placement?: "top" | "bottom" | "left" | "right";
  onStateChange?: (isOpen: boolean) => void;
}

export const Popover = ({
  children,
  variant,
  items,
  placement = "right",
  onStateChange,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemsClassName = classNames("popover__items", {
    [`popover__items--${placement}`]: placement,
  });

  const handleClickOutside = (event: MouseEvent) => {
    const popoverElement = document.querySelector(".popover");
    if (popoverElement && !popoverElement.contains(event.target as Node)) {
      setIsOpen(false);
      onStateChange?.(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`popover ${variant || ""}`}>
      <div
        className="popover__trigger"
        onClick={() => {
          setIsOpen(!isOpen);
          onStateChange?.(isOpen);
        }}
      >
        {children}
      </div>
      {isOpen && (
        <div className={itemsClassName}>
          {items.map((item) => (
            <div
              key={item.value}
              className="popover__item"
              onClick={() => {
                item.onClick?.();
                setIsOpen(false);
                onStateChange?.(false);
              }}
            >
              {item.icon && (
                <span className="popover__item-icon">{item.icon}</span>
              )}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
