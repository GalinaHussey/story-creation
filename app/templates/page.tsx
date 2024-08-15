import TemplateListWrapper from "../_components/TemplateListWrapper";
import { getTemplates } from "../_lib/data.servise";

export const metadata = {
  title: "Templates",
};

export default async function TemplatePage() {
  const templates = await getTemplates();

  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Choose Your Story Template
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Discover a world of imagination and wonder with our enchanting story
        templates. Personalize each tale with your child&apos;s name, favorite
        colors, and more, creating a unique adventure every time. Choose from a
        variety of magical journeys and let the storytelling begin!
      </p>
      <TemplateListWrapper templates={templates} />
    </div>
  );
}
