export class ConfigService {
    static urlBase: string = 'https://localhost:32768/';

    public static getUrlApi(endpoint: string){
        return  this.urlBase + endpoint;
    }
}