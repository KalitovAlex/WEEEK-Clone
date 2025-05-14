import {
  useForm,
  type SubmitHandler,
  type Path,
  type FieldValues,
  type DefaultValues,
} from "react-hook-form";
import { ZodSchema } from "zod";
import "./index.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { Button } from "../Button";
import type { ReactNode } from "react";
import i18n from "@/shared/i18n";

type FieldType = "text" | "email" | "number" | "password";

type FieldConfig<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type: FieldType;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

type SmartFormProps<T extends FieldValues> = {
  schema: ZodSchema<T>;
  fields: FieldConfig<T>[];
  onSubmit: SubmitHandler<T>;
  defaultValues?: DefaultValues<T>;
  buttonText?: string;
  isLoading?: boolean;
};

export function Form<T extends FieldValues>({
  schema,
  fields,
  onSubmit,
  defaultValues,
  buttonText = i18n.t("send"),
  isLoading = false,
}: SmartFormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div className="form-field" key={field.name}>
          <Input
            type={field.type}
            placeholder={field.label}
            icon={field.icon}
            iconPosition={field.iconPosition ?? "left"}
            {...register(field.name)}
            className={errors[field.name] ? "input error" : "input"}
          />
          {errors[field.name] && (
            <p className="error-message">
              {(errors[field.name]?.message as string) || ""}
            </p>
          )}
        </div>
      ))}

      <Button size="large" type="submit" isLoading={isLoading}>
        {buttonText}
      </Button>
    </form>
  );
}
