export class Palabra {
    palabra_ingles: string;
    palabra_espaniol: string;
    url_imagen : string;
    constructor(palabra_ingles?: string, palabra_espaniol?: string, url_imagen?: string)
    {
        this.palabra_espaniol=palabra_espaniol;
        this.palabra_ingles=palabra_ingles;
        this.url_imagen=url_imagen;
    }
}
