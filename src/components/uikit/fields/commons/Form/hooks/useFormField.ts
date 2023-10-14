import { ValidationRule, useController, useFormContext } from "react-hook-form";

export const useFormField = <T>({
  id,
  validate,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  isRequired = false,
  defaultValue,
}: {
  id: string;
  validate?: (value: T) => boolean | string;
  pattern?: ValidationRule<RegExp>;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  isRequired?: boolean;
  defaultValue?: T;
}) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange, ref, name },
    fieldState: { isDirty, error },
  } = useController({
    control,
    name: id,
    defaultValue,
    rules: {
      required: isRequired,
      min,
      max,
      minLength,
      maxLength,
      pattern,
      validate,
    },
  });

  const setValue = (value: T) => onChange(value);

  return {
    value,
    setValue,
    onChange,
    ref,
    name,
    isDirty,
    error,
  };
};
