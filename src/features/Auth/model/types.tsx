import i18n from "@/shared/i18n";
import { z } from "zod";

export const authFormSchema = z.object({
  email: z.string().email({ message: i18n.t("auth.email.invalid") }),
  password: z.string().min(4, { message: i18n.t("auth.password.min") }),
});
