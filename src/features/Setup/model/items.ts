import i18n from "@/shared/i18n";

export const howManyPeopleYouWork = [
  {
    label: i18n.t("howManyPeopleYouWork.options.onlyMe"),
    value: 1,
  },
  {
    label: "2-5",
    value: 2,
  },
  {
    label: "6-10",
    value: 3,
  },
  {
    label: "11-25",
    value: 4,
  },
  {
    label: "26-50",
    value: 5,
  },
  {
    label: "51-100",
    value: 6,
  },
  {
    label: "101+",
    value: 7,
  },
];

export const SETUP_STEP_KEY = "setup_step";
export const SETUP_STEP = {
  confirmed: "true",
};
