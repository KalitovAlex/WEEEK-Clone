import "./WorkSpace.page.scss";
import { Steps } from "@/shared/ui/Steps";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Input } from "@/shared/ui/Input";

export const WorkSpacePage = () => {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(0);
  console.log(setCurrentStep);
  const [workspaceName, setWorkspaceName] = useState("");

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
        <Steps stepsCount={2} currentStep={currentStep} />
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
              variant="filled"
              className="workspace-page__content__form__input"
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder={t("workspace.name")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Component = WorkSpacePage;
