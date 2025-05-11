import i18n from "@/shared/i18n";
import { z } from "zod";

export const authFormSchema = z.object({
  email: z.string().email({ message: i18n.t("auth.validation.email.invalid") }),
  password: z
    .string()
    .min(4, { message: i18n.t("auth.validation.password.min") }),
});

export const registerFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: i18n.t("auth.validation.firstName.required") }),
  lastName: z
    .string()
    .min(1, { message: i18n.t("auth.validation.lastName.required") }),
  email: z.string().email({ message: i18n.t("auth.validation.email.invalid") }),
  password: z
    .string()
    .min(4, { message: i18n.t("auth.validation.password.min") }),
});
