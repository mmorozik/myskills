import React from 'react';
import styles from './Toolbar.module.scss';

type Props = {
	children: React.ReactElement | Array<React.ReactElement>;
};

export const Toolbar: React.FC<Props> = ({ children }: Props) => {
	return <div className={styles.toolbar}>{children}</div >;
};
