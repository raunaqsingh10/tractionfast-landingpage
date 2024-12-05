// Environment variable validation and export
export const env = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL as string,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  },
} as const;

// Validate environment variables
const validateEnv = () => {
  if (!env.supabase.url) {
    throw new Error('VITE_SUPABASE_URL is not defined');
  }
  if (!env.supabase.anonKey) {
    throw new Error('VITE_SUPABASE_ANON_KEY is not defined');
  }
  
  try {
    new URL(env.supabase.url);
  } catch (error) {
    throw new Error('VITE_SUPABASE_URL is not a valid URL');
  }
};

validateEnv();