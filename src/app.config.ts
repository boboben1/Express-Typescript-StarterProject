export class AppConfig {
    port: any;
    useHttps?: boolean;
    cert?: string;
    key?: string;
    cors?: CorsSettings;
}

export class CorsSettings {
    origin?: string = "http://*";
}