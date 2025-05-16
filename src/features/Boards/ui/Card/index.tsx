import { Avatar } from "@/shared/ui/Avatar";
import "./index.scss";
import type { Board } from "@/entities/Boards/model";
import {
  LucideArchive,
  LucideEllipsis,
  LucideFile,
  LucidePencil,
  LucideStar,
  LucideTrash,
} from "lucide-react";
import { Popover } from "@/shared/ui/Popover";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import classNames from "classnames";

interface BoardCardProps {
  board: Board;
}
export const BoardCard = ({ board }: BoardCardProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const items = [
    {
      label: t("review"),
      icon: <LucideFile />,
      value: "review",
    },
    {
      label: t("toFavorites"),
      value: "toFavorites",
      icon: <LucideStar />,
    },
    {
      label: t("archive"),
      icon: <LucideArchive />,
      value: "archive",
    },
    {
      label: t("rename"),
      icon: <LucidePencil />,
      value: "edit",
    },
    {
      label: t("delete"),
      icon: <LucideTrash />,
      value: "delete",
    },
  ];

  return (
    <div className="board-card">
      <div className="board-card__content">
        <Avatar size="small" isRandomColor initials={board.title} />
        <p className="board-card__content__title">{board.title}</p>
      </div>
      <div className="board-card__actions">
        <Popover items={items} onStateChange={handleStateChange}>
          <LucideEllipsis
            className={classNames("board-card__actions__icon", {
              "board-card__actions__icon--active": isOpen,
            })}
          />
        </Popover>
      </div>
    </div>
  );
};
