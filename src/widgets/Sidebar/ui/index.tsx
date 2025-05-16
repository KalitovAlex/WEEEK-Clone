import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { Search } from "lucide-react";
import { useSidebar } from "@/features/Sidebar/model";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { boardStore } from "@/features/Boards/model";
import { Skeleton } from "@/shared/ui/Skeleton";
import { observer } from "mobx-react-lite";
import { BoardCard } from "@/features/Boards";
import { Popover } from "@/shared/ui/Popover";

export const Sidebar = observer(() => {
  const { t } = useTranslation();
  const { isExpanded: isSidebarExpanded, toggleSidebar } = useSidebar();
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true);
  const { boards, getBoards, isLoading } = boardStore;

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  useEffect(() => {
    if (!isSidebarExpanded) {
      setIsProjectsExpanded(false);
    } else {
      setIsProjectsExpanded(true);
    }
  }, [isSidebarExpanded]);

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
            onClick={() => {
              if (isSidebarExpanded) {
                setIsProjectsExpanded((prev) => !prev);
              }
            }}
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
                    {t("project.hidden", { count: boards.length })}
                  </h3>
                )}
                <Popover items={[]}>
                  <img
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="sidebar__content__projects__header__actions__add"
                    src="/add.svg"
                    alt="add"
                  />
                </Popover>
              </div>
            )}
          </div>
          {isProjectsExpanded && (
            <div className="sidebar__content__projects__boards">
              {isLoading ? (
                <Skeleton size="large" />
              ) : (
                boards.map((board) => <BoardCard board={board} />)
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
