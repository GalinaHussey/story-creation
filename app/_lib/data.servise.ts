import { supabase } from "./supabase";
import { Template } from "./types";

export async function getTemplates(): Promise<Template[]> {
  const { data, error } = await supabase
    .from("templates")
    .select("id, image, title, body, description")
    .order("title");

  if (error) {
    console.error(error);
    throw new Error("Templates could not be loaded");
  }

  return data as Template[];
}
