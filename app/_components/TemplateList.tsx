import TemplateCard from "./TemplateCard";
import { Template } from "../_lib/types";

type TemplateListProps = {
  templates: Template[];
};

function TemplateList({ templates }: TemplateListProps) {
  if (!templates.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}

export default TemplateList;
