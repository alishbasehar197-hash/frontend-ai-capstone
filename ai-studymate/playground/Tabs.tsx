import { useState, type ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveTab((current) => (current + 1) % tabs.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveTab(
        (current) => (current - 1 + tabs.length) % tabs.length
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveTab(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveTab(tabs.length - 1);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Example tabs"
        className="flex gap-2 border-b border-gray-300"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
            className={`rounded-t-lg px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 ${
              activeTab === index
                ? "bg-purple-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`panel-${tabs[activeTab].id}`}
        role="tabpanel"
        aria-labelledby={`tab-${tabs[activeTab].id}`}
        tabIndex={0}
        className="mt-4 rounded-lg border border-gray-200 bg-white p-5"
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}