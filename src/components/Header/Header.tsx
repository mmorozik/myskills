import React from "react";
import styles from "./Header.module.scss";
import { Toolbar } from "../uikit/Toolbar";
import { ToolbarItemGroup } from "../uikit/ToolbarItemGroup";
import { Tabs } from "../uikit/Tabs";
import { Switch } from "../uikit/fields/Switch";
import { Form } from "../uikit/fields/commons/Form";
import { FieldValues, useForm } from "react-hook-form";

enum TabsIds {
  Home = "home",
  Ez = "ez",
  Medium = "medium",
  Hard = "hard",
}

const tabs = [
  { id: TabsIds.Home, title: "Начальная страница" },
  { id: TabsIds.Ez, title: "Легкие задачи" },
  { id: TabsIds.Medium, title: "Средние задачи" },
  { id: TabsIds.Hard, title: "Сложные задачи" },
];

export const Header: React.FC = () => {
  const formDarkTheme = useForm<FieldValues>({
    defaultValues: {
      darkTheme: false,
    },
  });

  return (
    <div className={styles.header}>
      <Toolbar>
        <ToolbarItemGroup>
          <Tabs tabs={tabs} activeTabId={TabsIds.Home} />
        </ToolbarItemGroup>
        <ToolbarItemGroup>
          <Form form={formDarkTheme}>
            <Switch id="darkTheme" />
          </Form>
          <span>todo: фулл скрин</span>
          <span>Тут будет пользователь</span>
        </ToolbarItemGroup>
      </Toolbar>
    </div>
  );
};
