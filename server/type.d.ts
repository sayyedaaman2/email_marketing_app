declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        MONGODB_URI: string;
        // Add other environment variables here if needed
    }
}
