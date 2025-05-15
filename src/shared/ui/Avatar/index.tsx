import { useMemo } from "react";
import "./index.scss";

interface AvatarProps {
  initials: string;
  isRandomColor?: boolean;
}

const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Avatar = ({ initials, isRandomColor = false }: AvatarProps) => {
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

  return (
    <div className="avatar" style={{ backgroundColor }}>
      <p className="avatar__initials">{initialsArray}</p>
    </div>
  );
};
