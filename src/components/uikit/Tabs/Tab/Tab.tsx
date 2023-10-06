import React from "react";
import styles from "./Tab.module.scss";
import { TabItem } from "../../../../types/uikitTypes";
import cn from "classnames";

type Props = {
  tab: TabItem;
  activeTabId: string;
  onClick: (id: string) => void;
};

export const Tab: React.FC<Props> = ({ tab, activeTabId, onClick }: Props) => (
  <div
    onClick={() => onClick(tab.id)}
    className={cn(styles.tab, { [styles.active]: tab.id === activeTabId })}
  >
    {tab.title}
  </div>
);
