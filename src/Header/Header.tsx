import React from "react";
import styles from "./Header.module.scss";
import { Toolbar } from "../components/uikit/Toolbar";
import { ToolbarItemGroup } from "../components/uikit/ToolbarItemGroup";
import { Tabs } from "../components/uikit/Tabs";

enum TabsIds {
  Ez = "ez",
  Medium = "medium",
  Hard = "hard",
}

const tabs = [
  { id: TabsIds.Ez, title: "Легкие задачи" },
  { id: TabsIds.Medium, title: "Средние задачи" },
  { id: TabsIds.Hard, title: "Сложные задачи" },
];

export const Header: React.FC = () => (
  <div className={styles.header}>
    <Toolbar>
      <ToolbarItemGroup>
        <Tabs tabs={tabs} activeTabId={TabsIds.Ez} />
      </ToolbarItemGroup>
      <ToolbarItemGroup>
        <span>todo: свичер темная тема</span>
        <span>todo: фулл скрин</span>
        <span>Тут будет пользователь</span>
      </ToolbarItemGroup>
    </Toolbar>
  </div>
);
