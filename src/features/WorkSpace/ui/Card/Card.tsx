import { Avatar } from "@/shared/ui/Avatar";
import "./Card.scss";
import { useTranslation } from "react-i18next";
import { getItem } from "@/shared/utils/localstorage";
import { WORKSPACE_NAME } from "@/shared/constants/app";

export const WorkSpaceCard = () => {
  const { t } = useTranslation();
  return (
    <div className="work-space-card">
      <div className="work-space-card__content">
        <Avatar initials="AB" />
        <div className="work-space-card__main">
          <p className="work-space-card__main__title">
            {t("workspace.workSpace")}
          </p>
          <h2 className="work-space-card__main__name">
            {getItem(WORKSPACE_NAME)}
          </h2>
        </div>
      </div>
    </div>
  );
};
