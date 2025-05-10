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

type FieldType = "text" | "email" | "number" | "password";

type FieldConfig<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type: FieldType;
};

type SmartFormProps<T extends FieldValues> = {
  schema: ZodSchema<T>;
  fields: FieldConfig<T>[];
  onSubmit: SubmitHandler<T>;
  defaultValues?: DefaultValues<T>;
  buttonText?: string;
};

export function Form<T extends FieldValues>({
  schema,
  fields,
  onSubmit,
  defaultValues,
  buttonText = "Отправить",
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
        <div className="form-field" key={field.toString()}>
          <label>{field.label}</label>
          <Input
            type={field.type}
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

      <button type="submit">{buttonText}</button>
    </form>
  );
}
