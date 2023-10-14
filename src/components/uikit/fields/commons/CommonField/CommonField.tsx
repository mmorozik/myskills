import React from "react";
import styles from "./CommonField.module.scss";
import { InputType } from "../../../../../types/fieldTypes";
import cn from "classnames";

type Props = {
  id: string;
  className?: string;
  type: InputType;
  value?: string | number | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CommonField: React.FC<Props> = ({
  id,
  type,
  className,
  value,
  onChange,
}: Props) => {
  return (
    <input
      onChange={onChange}
      value={value ?? ""}
      id={id}
      className={cn(styles.commonField, className)}
      type={type}
    />
  );
};
