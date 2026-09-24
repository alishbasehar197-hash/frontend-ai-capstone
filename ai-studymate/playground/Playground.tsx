import { useState } from "react";
import { Modal } from "./Modal";
import { Tabs } from "./Tabs";
import { Disclosure } from "./Disclosure";

export function Playground() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Accessible Components Playground
        </h1>

        <p className="mt-2 text-gray-600">
          Modal, Tabs, and Disclosure built from scratch
          with React and TypeScript.
        </p>

        {/* Modal */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            1. Modal Dialog
          </h2>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-4 rounded-lg bg-purple-700 px-5 py-3 font-semibold text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Open Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            title="Accessible Modal Dialog"
            onClose={() => setIsModalOpen(false)}
          >
            <p>
              This modal demonstrates keyboard accessibility,
              focus management, and Escape key handling.
            </p>

            <button
              type="button"
              className="mt-4 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              Example Button
            </button>
          </Modal>
        </section>

        {/* Tabs */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            2. Tabs
          </h2>

          <div className="mt-4">
            <Tabs
              tabs={[
                {
                  id: "one",
                  label: "Tab One",
                  content: (
                    <p>
                      This is the content of the first tab.
                    </p>
                  ),
                },
                {
                  id: "two",
                  label: "Tab Two",
                  content: (
                    <p>
                      This is the content of the second tab.
                    </p>
                  ),
                },
                {
                  id: "three",
                  label: "Tab Three",
                  content: (
                    <p>
                      This is the content of the third tab.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Disclosure */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            3. Disclosure
          </h2>

          <div className="mt-4">
            <Disclosure title="What is accessibility?">
              <p>
                Accessibility means designing websites and
                applications so that people with different
                abilities can use them effectively.
              </p>
            </Disclosure>
          </div>
        </section>
      </div>
    </main>
  );
}