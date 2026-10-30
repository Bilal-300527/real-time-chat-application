import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

// Supabase Dashboard > Project Settings > API
const SUPABASE_URL = `https://azvzpzjbonybffwvzenv.supabase.co`;
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6dnpwempib255YmZmd3Z6ZW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyODQ0NjcsImV4cCI6MjEwODg2MDQ2N30.4zAPjaHmZmNPU6bBAqPnOyf041jFGfT0FK81yiEGUyE`;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
