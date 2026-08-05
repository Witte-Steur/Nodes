import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE__SUPABASE__URL;
const SUPABASE_KEY = import.meta.env.VITE__SUPABASE__KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export { supabase };
