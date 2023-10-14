import React from "react";
import styles from "./CommonFieldWrapper.module.scss";

type Props = {
  label?: string;
};

export const CommonFieldWrapper: React.FC<Props> = ({ label }: Props) => {
  return <div className={styles.commonFieldWrapper}>CommonFieldWrapper</div>;
};
