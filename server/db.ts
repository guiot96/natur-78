import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure Neon for serverless environment
neonConfig.webSocketConstructor = ws;
neonConfig.useSecureWebSocket = true;
neonConfig.pipelineConnect = false;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create pool with better error handling and connection management
let poolInstance: Pool | null = null;
try {
  poolInstance = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    max: 1, // Limit connections for serverless
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 5000 // Fast timeout
  });

  // Add connection error handling
  poolInstance.on('error', (err) => {
    console.error('Database pool error:', err);
  });
} catch (error) {
  console.error('Failed to initialize database pool:', error);
}

export const pool = poolInstance;
export const db = pool ? drizzle({ client: pool, schema }) : null;

if (poolInstance) {
  poolInstance.on('connect', () => {
    console.log('Database connected successfully');
  });
}
