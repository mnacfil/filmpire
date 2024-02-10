/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_READ_ACCESS_TOKEN: string;
  readonly VITE_TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
