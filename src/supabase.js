import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://jmobklayagsovcyskhfh.supabase.co";
const supakey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptb2JrbGF5YWdzb3ZjeXNraGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NzU1MDQsImV4cCI6MjAxMzE1MTUwNH0.iSi913yNv8RQYtBZG5VfbNWLx2dEzqVgzQBZ-5A2a8A";
const supabase = createClient(SUPABASE_URL, supakey);

export default supabase;
