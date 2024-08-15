"use client";

import { Template } from "../_lib/types";
import TemplateList from "./TemplateList";
import TemplateForm from "./TemplateForm";
import { useTemplateContext } from "../_context/TemplateContext";

type TemplateListWrapperProps = {
  templates: Template[];
};

function TemplateListWrapper({ templates }: TemplateListWrapperProps) {
  const { isShowing } = useTemplateContext();

  if (!templates.length) return null;

  return (
    <div>
      {isShowing && <TemplateForm />}
      <TemplateList templates={templates} />
    </div>
  );
}

export default TemplateListWrapper;
