import { Steps } from "@/shared/ui/Steps";
import "./WorkSpace.page.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Input } from "@/shared/ui/Input";

export const WorkSpacePage = () => {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(0);
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
          <Input
            value={workspaceName}
            variant="filled"
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder={t("workspace.name")}
          />
        </div>
      </div>
    </div>
  );
};

export const Component = WorkSpacePage;
