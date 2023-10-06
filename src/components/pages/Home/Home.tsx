import React from 'react';
import styles from './Home.module.scss';

export const Home: React.FC = () => (
	<div className={styles.home}>
		<h1 className={styles.title}>Тут будут храниться идеи, а потом многозначительный текст :D</h1>
		<ul className={styles.list}>
			<li>Сделать сайдбар, для каждого раздела он свой</li>
			<li>Начать наполнять uikit, начнем с Button и Tooltip</li>
		</ul>
	</div >
);

