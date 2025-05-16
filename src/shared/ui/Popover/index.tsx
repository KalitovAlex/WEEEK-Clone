import type { PopoverItem } from "@/shared/types/popover";
import { useState } from "react";
import "./index.scss";
import classNames from "classnames";

interface PopoverProps {
  children: React.ReactNode;
  variant?: "filled" | "default";
  items: PopoverItem[];
  placement?: "top" | "bottom" | "left" | "right";
}

export const Popover = ({
  children,
  variant,
  items,
  placement = "right",
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemsClassName = classNames("popover__items", {
    [`popover__items--${placement}`]: placement,
  });

  return (
    <div className={`popover ${variant || ""}`}>
      <div className="popover__trigger" onClick={() => setIsOpen(!isOpen)}>
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
