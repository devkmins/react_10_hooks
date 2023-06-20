import { useState } from "react";

export const useTabs = (initialTab: any, allTabs: any) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
