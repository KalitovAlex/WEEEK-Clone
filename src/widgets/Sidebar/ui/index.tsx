import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { Search } from "lucide-react";
import { useSidebar } from "@/features/Sidebar/model";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { boardStore } from "@/features/Boards/model";
import { Skeleton } from "@/shared/ui/Skeleton";

export const Sidebar = () => {
  const { t } = useTranslation();
  const { isExpanded: isSidebarExpanded, toggleSidebar } = useSidebar();
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true);
  const { boards, getBoards, isLoading } = boardStore;

  console.log(boards);

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  const titleClassName = classNames(
    "sidebar__content__projects__header__title",
    {
      "sidebar__content__projects__header__title--collapsed":
        !isProjectsExpanded,
    }
  );

  return (
    <div className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar__content">
        <Input
          {...(!isSidebarExpanded && {
            onlyIcon: true,
            onClick: () => {
              toggleSidebar();
            },
          })}
          filled
          iconLeft={<Search width={22} height={22} />}
          placeholder={t("project.name")}
        />
        <div className="sidebar__content__projects">
          <div
            className="sidebar__content__projects__header"
            onClick={() => setIsProjectsExpanded((prev) => !prev)}
          >
            <h3 className={titleClassName}>
              {!isSidebarExpanded ? (
                <p onClick={() => toggleSidebar()}>
                  {t("project.title").slice(0, 2)}...
                </p>
              ) : (
                t("project.title")
              )}
            </h3>
            {isSidebarExpanded && (
              <div className="sidebar__content__projects__header__actions">
                {!isProjectsExpanded && (
                  <h3 className="sidebar__content__projects__header__actions__title">
                    {t("project.hidden", { count: 0 })}
                  </h3>
                )}
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="sidebar__content__projects__header__actions__add"
                  src="/add.svg"
                  alt="add"
                />
              </div>
            )}
          </div>
          <div className="sidebar__content__projects__boards">
            {isLoading ? (
              <Skeleton size="large" />
            ) : (
              boards.map((board) => (
                <div
                  className="sidebar__content__projects__boards__item"
                  key={board._id}
                >
                  <p>{board.title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
