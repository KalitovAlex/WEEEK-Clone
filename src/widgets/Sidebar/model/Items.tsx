import i18n from "@/shared/i18n";
import { LucideFolderPlus, LucidePlus } from "lucide-react";

export enum ModalType {
  project = "project",
  folder = "folder",
}

export const projectItems = ({
  onClick,
}: {
  onClick: (type: ModalType) => void;
}) => {
  return [
    {
      label: i18n.t("project.new"),
      icon: <LucidePlus />,
      value: "new-project",
      onClick: () => {
        onClick(ModalType.project);
      },
    },
    {
      label: i18n.t("folder.new"),
      icon: <LucideFolderPlus />,
      value: "new-folder",
      onClick: () => {
        onClick(ModalType.folder);
      },
    },
  ];
};
