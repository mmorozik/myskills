import React from 'react';
import styles from './Header.module.scss';
import { Toolbar } from '../components/uikit/Toolbar';
import { ToolbarItemGroup } from '../components/uikit/ToolbarItemGroup';

export const Header: React.FC = () => (
	<div className={styles.header}>
		<Toolbar>
			<ToolbarItemGroup>
				<span>todo: сдлать ui Tabs</span>
			</ToolbarItemGroup>
			<ToolbarItemGroup>
				<span>todo: свичер темная тема</span>
				<span>todo: фулл скрин</span>
				<span>Тут будет пользователь</span>
			</ToolbarItemGroup>
		</Toolbar>
	</div >);

