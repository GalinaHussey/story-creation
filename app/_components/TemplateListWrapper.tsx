"use client";

import { Template } from "../_lib/types";
import TemplateList from "./TemplateList";
import TemplateForm from "./TemplateForm";
import { useTemplateContext } from "../_context/TemplateContext";

type TemplateListWrapperProps = {
  templates: Template[]; // List of templates
};

// Wrapper component that handles showing the modal and the template list
function TemplateListWrapper({ templates }: TemplateListWrapperProps) {
  const { isShowing } = useTemplateContext(); // Whether the modal form is visible

  if (!templates.length) return null; // Renders nothing if no templates are available

  return (
    <div>
      {isShowing && <TemplateForm />}{" "}
      {/* Show the modal form if isShowing is true */}
      <TemplateList templates={templates} />
    </div>
  );
}

export default TemplateListWrapper;
