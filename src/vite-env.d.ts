/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_APP?: "mainnet" | "testnet";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
