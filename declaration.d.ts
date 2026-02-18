declare namespace NodeJS {
    interface ProcessEnv {
        readonly APP_ENV: "development" | "testing" | "production";
    }
}
