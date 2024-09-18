"use client";

import Image from "next/legacy/image";
import { Template } from "../_lib/types";
import Button from "./Button";
import { useTemplateContext } from "../_context/TemplateContext";

// Displays a template card with title, description, and a button to open a modal.
type TemplateCardProps = {
  template: Template;
};

function TemplateCard({ template }: TemplateCardProps) {
  const { setIsShowing } = useTemplateContext();

  function handleClickModal() {
    setIsShowing((show) => !show);
  }

  return (
    <div className="flex border border-primary-800">
      <div className="relative w-2/5 flex-shrink-0 flex items-stretch">
        <Image
          src={template.image}
          layout="fill"
          alt={`image of ${template.title}`}
          className="object-cover"
        />
      </div>

      <div className="flex-grow bg-primary-950 flex flex-col justify-between">
        <div className="pt-5 pb-4 px-7">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            {template.title}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <p className="text-lg text-primary-200">{template.description}</p>
          </div>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <button
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 text-lg"
            onClick={handleClickModal}
          >
            Try it &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
