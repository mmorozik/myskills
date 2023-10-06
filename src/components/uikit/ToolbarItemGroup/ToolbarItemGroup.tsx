import React from 'react';
import styles from './ToolbarItemGroup.module.scss';

type Props = {
	children: React.ReactElement | Array<React.ReactElement>
};

export const ToolbarItemGroup: React.FC<Props> = ({ children }: Props) => <div className={styles.toolbarItemGroup}>{children}</div >;

