import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import { TabItem } from "../../../types/uikitTypes";
import { Tab } from "./Tab";

type Props = {
  tabs: Array<TabItem>;
  activeTabId?: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  activeTabId: activeTabIdFromProps,
}: Props) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    activeTabIdFromProps || tabs[0].id
  );

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab
          onClick={(id) => setActiveTabId(id)}
          tab={tab}
          activeTabId={activeTabId}
        />
      ))}
    </div>
  );
};
