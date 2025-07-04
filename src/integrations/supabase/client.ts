// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kxdqbqxkvkyzjjvvqilo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZHFicXhrdmt5empqdnZxaWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDM0MTgsImV4cCI6MjA2NjkxOTQxOH0.Tqb5VolmjdLlPO5FEPLlIoGgW4EanimHW7DVz6PVL50";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
