import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
};

export function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultTab ?? tabs[0]?.id ?? ""
  );

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!tabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(tabs[0]?.id ?? "");
    }
  }, [tabs, activeTab]);

  if (tabs.length === 0) {
    return null;
  }

  const activeTabData = tabs.find(
    (tab) => tab.id === activeTab
  );

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      nextIndex =
        (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    const nextTab = tabs[nextIndex];

    setActiveTab(nextTab.id);

    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Example tabs"
        className="flex gap-2 border-b border-gray-300"
      >
        {tabs.map((tab, index) => {
          const isSelected = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) =>
                handleKeyDown(event, index)
              }
              className={`rounded-t-lg px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                isSelected
                  ? "bg-purple-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTabData && (
        <div
          role="tabpanel"
          id={`panel-${activeTabData.id}`}
          aria-labelledby={`tab-${activeTabData.id}`}
          tabIndex={0}
          className="mt-4 rounded-lg border border-gray-200 bg-white p-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          {activeTabData.content}
        </div>
      )}
    </div>
  );
}