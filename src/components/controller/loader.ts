interface ILoader {
    makeUrl(options: object, endpoint: object | string): string;
    errorHandler(res: object): object;
}

interface Response {
    [index: string]: string | number | object | undefined;
    statusText: string | undefined;
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
    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }
}

export default Loader;
