import "./index.scss";

interface AvatarProps {
  initials: string;
}

export const Avatar = ({ initials }: AvatarProps) => {
  const initialsArray = initials
    ? initials
        .split(" ")
        .map((word) => word?.[0]?.toUpperCase() ?? "")
        .join("")
    : "";

  return (
    <div className="avatar">
      <p className="avatar__initials">{initialsArray}</p>
    </div>
  );
};
