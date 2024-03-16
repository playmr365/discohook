export interface Env {
  KV: KVNamespace;
  __STATIC_CONTENT: Fetcher;
  // __STATIC_CONTENT_MANIFEST: Object;
  SESSION_SECRET: string;
  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;
  DISCORD_BOT_TOKEN: string;
  DISCORD_SUPPORT_INVITE_CODE: string;
  DATABASE_URL: string;
  KOFI_WEBHOOK_TOKEN?: string;
  CRYPTO_ALERTS_TOKEN?: string;
  BITCOIN_ADDRESS?: string;
  // discohook.org - for importing old-style backups
  LEGACY_ORIGIN?: string;
}
