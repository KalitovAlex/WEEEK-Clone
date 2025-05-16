import "./WorkSpace.page.scss";
import { Steps } from "@/shared/ui/Steps";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { setItem } from "@/shared/utils/localstorage";
import { WORKSPACE_NAME } from "@/shared/constants/app";
import { SETUP_STEP, SETUP_STEP_KEY } from "@/features/Setup/model/items";

export const WorkSpacePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("");
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setItem(WORKSPACE_NAME, workspaceName);
      setItem(SETUP_STEP_KEY, SETUP_STEP.confirmed);
      navigate(ROUTES.HOME);
    }, 1000);
  };

  return (
    <div className="workspace-page">
      <div className="workspace-page__content">
        <div className="workspace-page__content__header">
          <p className="workspace-page__content__header__title">
            {t("workspace.title")}
            <span className="workspace-page__content__header__title--highlight">
              {t("workspace.work")}
            </span>
          </p>
        </div>
        <Steps stepsCount={2} currentStep={0} />
        <div className="workspace-page__content__form">
          <p className="workspace-page__content__form__desc">
            {t("workspace.desc")}
          </p>
          <div className="workspace-page__content__form__input-wrapper">
            <p className="workspace-page__content__form__input-wrapper__label">
              {t("workspace.name")}
            </p>
            <Input
              value={workspaceName}
              className="workspace-page__content__form__input"
              filled
              onChange={(e) => setWorkspaceName(e)}
              placeholder={t("workspace.name")}
            />
          </div>
        </div>
        <div className="workspace-page__content__form__button-wrapper">
          <Button
            size="large"
            variant="primary"
            onClick={handleClick}
            disabled={workspaceName.length === 0 || isLoading}
          >
            {t("next")}
          </Button>
          <div className="workspace-page__content__form__button-wrapper__loader">
            {isLoading && (
              <p className="workspace-page__content__form__button-wrapper__loader__text">
                {t("workspace.loading")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Component = WorkSpacePage;
