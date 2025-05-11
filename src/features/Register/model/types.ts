import i18n from "@/shared/i18n";
import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, { message: i18n.t("auth.validation.name.required") }),
  surname: z
    .string()
    .min(1, { message: i18n.t("auth.validation.surname.required") }),
  email: z.string().email({ message: i18n.t("auth.validation.email.invalid") }),
  password: z
    .string()
    .min(4, { message: i18n.t("auth.validation.password.min") }),
});
