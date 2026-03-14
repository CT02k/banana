import "dotenv/config";

const required = (variable: string): string => {
  if (!process.env[variable])
    throw new Error(`${variable} is required, fill the .env`);
  return process.env[variable];
};

const env = {
  PORT: process.env.PORT ?? "3000",
} as const;

export default env;
