import { createClient } from "@supabase/supabase-js";

// Supabase client initialization using environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or key");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
