"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Tab = "reco" | "follow";

export const TabContext = createContext<{
  tab: Tab;
  setTab: Dispatch<SetStateAction<Tab>>;
}>({
  tab: "reco",
  setTab: () => {},
});

export default function TabProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<Tab>("reco");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
