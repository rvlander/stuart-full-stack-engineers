export const port = process.env.PORT || 3000;
export const env = process.env.NODE_ENV;
export const database = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER || "test",
  password: process.env.DB_PASSWORD || "test",
  database: process.env.DB_NAME || "test",
};
