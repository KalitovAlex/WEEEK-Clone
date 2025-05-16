import { Avatar } from "@/shared/ui/Avatar";
import "./index.scss";
import type { Board } from "@/entities/Boards/model";
import { LucideEllipsis, LucidePencil } from "lucide-react";
import { Popover } from "@/shared/ui/Popover";

interface BoardCardProps {
  board: Board;
}
export const BoardCard = ({ board }: BoardCardProps) => {
  const items = [
    {
      label: "Edit",
      icon: <LucidePencil />,
      value: "edit",
    },
  ];
  return (
    <div className="board-card">
      <div className="board-card__content">
        <Avatar size="small" isRandomColor initials={board.title} />
        <p className="board-card__content__title">{board.title}</p>
      </div>
      <div className="board-card__actions">
        <Popover items={items}>
          <LucideEllipsis className="board-card__actions__icon" />
        </Popover>
      </div>
    </div>
  );
};
