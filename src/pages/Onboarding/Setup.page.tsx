import { Steps } from "@/shared/ui/Steps";
import "./Setup.page.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "@/shared/ui/Button";
import { Toggle } from "@/shared/ui/Toggle";
import {
  howManyPeopleYouWork,
  whatDoYouDo,
} from "@/features/Setup/model/items";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { Select } from "@/shared/ui/Select";

export const SetupPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPeoples, setSelectedPeoples] = useState<number>(
    howManyPeopleYouWork[0].value
  );

  return (
    <div className="setup-page">
      <div className="setup-page__content">
        <div className="setup-page__content__header">
          <p className="setup-page__content__header__title">
            {t("setup.title")}
            <span className="setup-page__content__header__title--highlight">
              {t("setup.yourself")}
            </span>
          </p>
        </div>
        <Steps stepsCount={3} currentStep={currentStep} />
        <div className="setup-page__content__step">
          <p className="setup-page__content__step__title">{t("setup.help")}</p>
          <div className="setup-page__content__step__peoples">
            <p className="setup-page__content__step__peoples__title">
              {t("setup.peoples")}
            </p>
            <div className="setup-page__content__step__peoples__list">
              {howManyPeopleYouWork.map((item) => (
                <Toggle
                  key={item.value}
                  label={item.label}
                  checked={selectedPeoples === item.value}
                  onChange={() => {
                    setSelectedPeoples(item.value);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        {currentStep >= 1 && (
          <div className="setup-page__content__step__what-do">
            <p className="setup-page__content__step__what-do__title">
              {t("setup.whatDo")}
            </p>
            <Select
              options={whatDoYouDo}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
        )}
        {currentStep >= 2 && (
          <div className="setup-page__content__step__what-do">
            <p className="setup-page__content__step__what-do__title">
              {t("setup.whatDo")}
            </p>
            <Select
              options={whatDoYouDo}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
        )}
        <Button
          onClick={() => {
            if (currentStep === 3) {
              navigate(ROUTES.HOME);
            }
            setCurrentStep((prev) => prev + 1);
          }}
        >
          {t("next")}
        </Button>
      </div>
    </div>
  );
};

export const Component = SetupPage;
