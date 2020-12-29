interface IConfig {
  PORT: string | number;
  NODE_ENV: "development" | "production" | "test";
  SERVER_HOST: string;
}

declare const config: IConfig;
export default config;
