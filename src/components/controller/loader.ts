interface ILoader {
    makeUrl(options: object, endpoint: object | string): string;
    errorHandler(res: object): object;
    load(
        method: string | undefined,
        endpoint: object | string,
        callback: (data: object) => void,
        options: object
    ): void;
    getResp(object: object): void;
}

interface IGetResp {
    endpoint: string;
    options?: object;
}

class Loader implements ILoader {
    constructor(public baseLink: string, public options: object) {}

    getResp(
        { endpoint, options = {} }: IGetResp,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

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

    load(
        method: string | undefined,
        endpoint: object | string,
        callback: (data: object) => void,
        options: object = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
