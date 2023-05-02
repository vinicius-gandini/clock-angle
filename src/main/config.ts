import 'dotenv/config';

export const env = {
  nodeEnv: process.env.NODE_ENV,
  app: {
    port: process.env.APP_PORT ?? 3000,
  },
  mysql: {
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT) || 5432,
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
};
