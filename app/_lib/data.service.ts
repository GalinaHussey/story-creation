import { supabase } from "./supabase";
import { Template } from "./types";

// Fetch templates from Supabase database
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

// Fetch a specific template by its ID from Supabase
export async function getTemplateById(templateId: string) {
  const { data, error } = await supabase
    .from("templates")
    .select("id, title, body")
    .eq("id", templateId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Template could not be loaded");
  }

  return data; // Returns the template with the story body
}

// Function to insert a personalized story into Supabase

export async function insertStory(story: string): Promise<{ id: string }> {
  const { data, error } = await supabase
    .from("stories") // Assuming your table is called 'stories'
    .insert([{ body: story }]) // Inserting the story into the 'body' column
    .single(); // Returns the single inserted row

  if (error) {
    throw new Error("Error inserting story");
  }

  return data; // Return the inserted story data, including the story ID
}

// Function to fetch a story by ID from Supabase
export const getStoryById = async (storyID: string) => {
  const { data, error } = await supabase
    .from("stories")
    .select("id, body")
    .eq("id", storyID)
    .single(); // Fetching a single story by its ID

  if (error) {
    throw new Error("Error fetching story");
  }

  return data;
};
