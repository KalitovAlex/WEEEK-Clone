import { Avatar } from "@/shared/ui/Avatar";
import "./index.scss";
import type { Board } from "@/entities/Boards/model";
import { LucideEllipsis } from "lucide-react";

interface BoardCardProps {
  board: Board;
}
export const BoardCard = ({ board }: BoardCardProps) => {
  return (
    <div className="board-card">
      <div className="board-card__content">
        <Avatar size="small" isRandomColor initials={board.title} />
        <p className="board-card__content__title">{board.title}</p>
      </div>
      <div className="board-card__actions">
        <LucideEllipsis className="board-card__actions__icon" />
      </div>
    </div>
  );
};
