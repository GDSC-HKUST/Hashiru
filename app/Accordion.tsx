"use client";

import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

export default function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(0 as number | undefined);
  const data = [
    {
      title: "Is Hashiru open-source?",
      description: (
        <p className="mb-2 text-gray-500">
          Hashiru is an open-source! Check out our{" "}
          <a href="https://github.com/GDSC-HKUST/Hashiru">GitHub repository</a>{" "}
          :)
        </p>
      ),
    },
    {
      title: "Can I contribute?",
      description: (
        <p className="mb-2 text-gray-500">
          Yes, absolutely! Feel free to submit pull requests 🚀
        </p>
      ),
    },
  ];
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white text-gray-900"
      data-inactive-classes="text-gray-500"
    >
      {data.map((x, i) => (
        <Fragment key={i}>
          <h3 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200"
              onClick={() => setExpandedIndex((x) => (x === i ? undefined : i))}
            >
              <span>{x.title}</span>
              {expandedIndex === i ? (
                <ChevronUpIcon className="w-6 h-6 rotate-180 shrink-0" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 rotate-180 shrink-0" />
              )}
            </button>
          </h3>
          <div id="accordion-flush-body-1" hidden={expandedIndex !== i}>
            <div className="py-5 border-b border-gray-200">{x.description}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
