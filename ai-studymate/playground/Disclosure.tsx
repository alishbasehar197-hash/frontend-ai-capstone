import { useId, useState, type ReactNode } from "react";

type DisclosureProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function Disclosure({
  title,
  children,
  defaultOpen = false,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const contentId = useId();

  return (
    <div className="rounded-lg border border-gray-300 bg-white">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <span>{title}</span>

        <span aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={contentId}
        hidden={!isOpen}
        className="border-t border-gray-200 px-4 py-3 text-gray-700"
      >
        {children}
      </div>
    </div>
  );
}