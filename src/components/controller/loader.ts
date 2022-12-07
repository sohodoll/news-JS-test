interface ILoader {
    makeUrl(options: object, endpoint: object | string): string;
}

class Loader implements ILoader {
    constructor(public baseLink: string, public options: object) {}
    makeUrl(options: object, endpoint: object | string): string {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }
}

export default Loader;
