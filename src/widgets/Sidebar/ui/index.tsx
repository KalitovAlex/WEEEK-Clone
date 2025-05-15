import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { Search } from "lucide-react";
import { useSidebar } from "@/features/Sidebar/model";

export const Sidebar = () => {
  const { t } = useTranslation();
  const { isExpanded } = useSidebar();

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <Input
        iconLeft={<Search width={22} height={22} />}
        placeholder={t("project.name")}
      />
    </div>
  );
};
