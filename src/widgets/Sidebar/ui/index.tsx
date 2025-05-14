import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { Search } from "lucide-react";

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <Input
        icon={<Search width={22} height={22} />}
        variant="filled"
        placeholder={t("project.name")}
      />
    </div>
  );
};
