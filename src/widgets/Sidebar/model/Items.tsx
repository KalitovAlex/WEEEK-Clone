import i18n from "@/shared/i18n";
import { LucideFolderPlus, LucidePlus } from "lucide-react";

export const ProjectItems = [
  {
    label: i18n.t("project.new"),
    icon: <LucidePlus />,
    value: "new-project",
  },
  {
    label: i18n.t("folder.new"),
    icon: <LucideFolderPlus />,
    value: "new-folder",
  },
];
