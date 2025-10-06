// src/env.ts
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_PAYPHONE_TOKEN: z.string(),
  NEXT_PUBLIC_PAYPHONE_STORE_ID: z.string(),
  NEXT_PUBLIC_BACKEND_URL: z.string().url(),
});

// 👀 Ojo: usamos parse (NO safeParse)
// Si falta algo, lanza error y rompe el build / dev inmediatamente
const parsed = envSchema.parse({
  NEXT_PUBLIC_PAYPHONE_TOKEN: process.env.NEXT_PUBLIC_PAYPHONE_TOKEN,
  NEXT_PUBLIC_PAYPHONE_STORE_ID: process.env.NEXT_PUBLIC_PAYPHONE_STORE_ID,
  NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// 🎨 Mapeo legible
export const envs = {
  PayphoneToken: parsed.NEXT_PUBLIC_PAYPHONE_TOKEN,
  PayphoneStoreId: parsed.NEXT_PUBLIC_PAYPHONE_STORE_ID,
  BackendUrl: parsed.NEXT_PUBLIC_BACKEND_URL,
};
