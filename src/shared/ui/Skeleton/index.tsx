import "./index.scss";

interface SkeletonProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export const Skeleton = ({ size = "medium" }: SkeletonProps) => {
  const sizeClass = {
    small: "skeleton--small",
    medium: "skeleton--medium",
    large: "skeleton--large",
  };
  return <div className={`skeleton ${sizeClass[size]}`}></div>;
};
