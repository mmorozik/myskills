import React from "react";
import { UseFormReturn, FormProvider, FieldValues } from "react-hook-form";

type Props = {
  form: UseFormReturn<FieldValues>;
  children: React.ReactElement | Array<React.ReactElement>;
  onSubmit?: (data: FieldValues) => void;
};

export const Form: React.FC<Props> = ({ form, children, onSubmit }: Props) => (
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit((data) => onSubmit?.(data))}>
      {children}
    </form>
  </FormProvider>
);
