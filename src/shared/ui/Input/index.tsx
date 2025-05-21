import {
  forwardRef,
  useState,
  useId,
  useEffect,
  type ChangeEvent,
} from "react";
import { Loader } from "@/shared/ui/Loader";
import classNames from "classnames";
import styles from "./index.module.scss";
import { X } from "lucide-react";

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "onFocus" | "onBlur" | "size"
  > {
  value?: string | number;
  onChange?: (value: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  wrapperStyle?: React.CSSProperties;
  error?: string | boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  addonRight?: React.ReactNode;
  filled?: boolean;
  loading?: boolean;
  onlyIcon?: boolean;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value: controlledValue,
      onChange: onControlledChange,
      onFocus,
      onBlur,
      className,
      inputClassName,
      wrapperStyle,
      error,
      iconLeft,
      iconRight,
      clearable,
      onClear,
      addonRight,
      filled,
      loading,
      onlyIcon,
      disabled,
      readOnly,
      placeholder,
      label,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const [internalValue, setInternalValue] = useState(controlledValue ?? "");

    useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInternalValue(newValue);
      if (onControlledChange) {
        onControlledChange(newValue);
      }
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setInternalValue("");
      if (onControlledChange) {
        onControlledChange("");
      }
      if (onClear) {
        onClear();
      }
    };

    const chosenIconForOnlyMode = iconLeft || iconRight;

    const wrapperCls = classNames(styles["input-wrapper"], className, {
      [styles["--filled"]]: filled,
      [styles["--disabled"]]: disabled,
      [styles["--error"]]: error,
      [styles["--only-icon"]]: onlyIcon,
      [styles.loading]: loading && onlyIcon,
    });

    const contentCls = classNames(styles["input-content"], {
      [styles["--error"]]: error,
    });

    const inputCls = classNames(styles.input, inputClassName, {
      [styles["has-icon"]]: (iconLeft || iconRight) && !onlyIcon,
      [styles["icon-left"]]: iconLeft && !onlyIcon,
      [styles["icon-right"]]:
        iconRight && !clearable && !addonRight && !onlyIcon,
      [styles["input--disabled"]]: disabled,
      [styles["input--readonly"]]: readOnly,
    });

    const currentVal =
      controlledValue !== undefined ? controlledValue : internalValue;

    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onlyIcon && rest.onClick) {
        (rest.onClick as React.MouseEventHandler<HTMLDivElement>)!(e);
      }
    };

    const handleWrapperKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (onlyIcon && (e.key === "Enter" || e.key === " ")) {
        if (rest.onClick) {
          // @ts-expect-error(TODO: fix this)
          (rest.onClick as React.MouseEventHandler<HTMLDivElement>)!(e);
        }
      }
    };

    return (
      <div className={contentCls}>
        {label && (
          <label
            className={styles["input-label"]}
            htmlFor={rest.id || generatedId}
          >
            {label}
          </label>
        )}
        <div
          className={wrapperCls}
          style={wrapperStyle}
          onClick={onlyIcon ? handleWrapperClick : undefined}
          role={onlyIcon ? "button" : undefined}
          tabIndex={onlyIcon && !disabled ? 0 : undefined}
          onKeyDown={onlyIcon && !disabled ? handleWrapperKeyDown : undefined}
          aria-disabled={onlyIcon && disabled ? true : undefined}
        >
          {loading && <Loader />}

          {onlyIcon ? (
            chosenIconForOnlyMode && (
              <span className={styles["standalone-icon"]}>
                {chosenIconForOnlyMode}
              </span>
            )
          ) : (
            <>
              {iconLeft && (
                <span
                  className={classNames(
                    styles["input-icon"],
                    styles["input-icon-left"]
                  )}
                >
                  {iconLeft}
                </span>
              )}
              <input
                id={rest.id || generatedId}
                ref={ref}
                placeholder={placeholder}
                {...rest}
                value={currentVal}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                disabled={disabled || loading}
                readOnly={readOnly}
                className={inputCls}
              />
              {!loading &&
                !disabled &&
                currentVal &&
                clearable &&
                !addonRight && (
                  <button
                    type="button"
                    className={styles["input-wrapper__button"]}
                    onClick={handleClear}
                    aria-label="Clear input"
                  >
                    <X size={18} />
                  </button>
                )}
              {iconRight && !clearable && !addonRight && (
                <span
                  className={classNames(
                    styles["input-icon"],
                    styles["input-icon-right"]
                  )}
                >
                  {iconRight}
                </span>
              )}
              {addonRight && (
                <div className={styles["input-wrapper__addon"]}>
                  {addonRight}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
