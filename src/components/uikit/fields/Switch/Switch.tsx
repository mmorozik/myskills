import React from "react";
import styles from "./Switch.module.scss";
import { InputType, SwitchFieldType } from "../../../../types/fieldTypes";
import { useFormField } from "../commons/Form/hooks/useFormField";

type Props = {
  isActive?: boolean;
  id: string;
  validate?: () => boolean | string;
  isDisabled?: boolean;
};

export const Switch: React.FC<Props> = ({
  isActive: isActiveFromProps = false,
  id,
  validate,
  isDisabled,
}: Props) => {
  const { value, setValue } = useFormField<SwitchFieldType>({
    id,
    validate,
    defaultValue: isActiveFromProps,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.checked;

    setValue(value);
  };

  return (
    <label className={styles.switch} htmlFor={id}>
      <input
        onChange={handleChange}
        className={styles.switchInput}
        id={id}
        type={InputType.Checkbox}
        checked={value}
        disabled={isDisabled}
      />
      <span className={styles.switchContent} />
    </label>
  );
};
