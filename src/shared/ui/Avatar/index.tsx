import { useMemo } from "react";
import "./index.scss";
import classNames from "classnames";
import { SMALL, MEDIUM, LARGE } from "@/shared/constants/sizes";

interface AvatarProps {
  initials: string;
  isRandomColor?: boolean;
  size?: "small" | "medium" | "large";
}

const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Avatar = ({
  initials,
  isRandomColor = false,
  size = "medium",
}: AvatarProps) => {
  const initialsArray = initials
    ? initials
        .split(" ")
        .map((word) => word?.[0]?.toUpperCase() ?? "")
        .join("")
    : "";

  const backgroundColor = useMemo(() => {
    if (isRandomColor) {
      return getRandomColor();
    }
    return "#f8f8fb";
  }, [isRandomColor]);

  const avatarClassName = classNames("avatar", {
    "avatar--small": size === SMALL,
    "avatar--medium": size === MEDIUM,
    "avatar--large": size === LARGE,
  });

  const avatarInitialsClassName = classNames(
    size === MEDIUM ? "avatar__initials" : ""
  );

  return (
    <div className={avatarClassName} style={{ backgroundColor }}>
      <p className={avatarInitialsClassName}>{initialsArray}</p>
    </div>
  );
};
