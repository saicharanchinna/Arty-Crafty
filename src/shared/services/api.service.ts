import axios, {
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import Communications from "./communications.service";
import {ENV, Misc} from "../../constants";
import { IAPIResponseType, IAxiosOptions } from "../models/api.model";
import localStorageService from "./local-storage.service";

export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const AXIOS_REQUEST_CANCELLED = 'AXIOS_REQUEST_CANCELLED';

let jwtToken: string | undefined = localStorageService.getItem(Misc.LOCAL_STORAGE_JWT_TOKEN) || '';

Communications.updateLoginUserTokenSubject.subscribe((token: string | undefined) => {
    jwtToken = token;
});

const getHeaders = (headers: any) => {
    const AuthorizationHeaders = {'Authorization': 'Bearer ' + jwtToken};
    headers = {
        ...defaultHeaders, ...AuthorizationHeaders, ...headers
    };
    return headers;
}

const ApiService = {
    post: (url: string, payload = {},
           headers = {}, options: IAxiosOptions = {},
           progressCallback: (progress: number) => void = (progress) => {
           }): Promise<IAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            ...options,
            onUploadProgress: uploadProgressHandler.bind(null, progressCallback)
        };
        let request = axios.post(url, payload, axiosOptions);
        return getRequestPromise(request);
    },
    put: (url: string, payload = {},
          headers = {}, options: IAxiosOptions = {},
          progressCallback: (progress: number) => void = (progress) => {
          }): Promise<IAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            ...options,
            onUploadProgress: uploadProgressHandler.bind(null, progressCallback)
        };
        let request = axios.put(url, payload, axiosOptions);
        return getRequestPromise(request);
    },
    upload: (url: string, payload = new FormData(),
             headers = {}, options: IAxiosOptions = {},
             progressCallback: (progress: number) => void = (progress) => {
             }): Promise<IAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders({...headers}),
            ...options,
            onUploadProgress: uploadProgressHandler.bind(null, progressCallback)
        };
        let request = axios.post(url, payload, axiosOptions);
        return getRequestPromise(request);
    },
    get: (url: string, payload = {}, headers = {},
          options: IAxiosOptions = {}): Promise<IAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            params: payload,
            ...options,
        };
        let request = axios.get(url, axiosOptions);
        return getRequestPromise(request);
    },
    delete: (url: string, payload = {}, headers = {},
             options: IAxiosOptions = {}): Promise<IAPIResponseType<any>> => {
        // options = getParsedOptions(headers, options);
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            data: payload,
            ...options
        };
        let request = axios.delete(url, axiosOptions);
        return getRequestPromise(request);
    }
}

const uploadProgressHandler = (progressCallback: (progress: number) => void, progressEvent: any) => {
    if (progressCallback) {
        const percentFraction = progressEvent.loaded / progressEvent.total;
        const percent = Math.floor(percentFraction * 100);
        progressCallback(percent);
    }
}

const getRequestPromise = (request: Promise<AxiosResponse>) => {
    return new Promise<any>((resolve, reject) => {
        request
            .then((resp) => {
                if (ENV.ENABLE_HTTP_LOGS) {
                    console.log('====>>>>>>', resp.data);
                }
                // @ts-ignore
                resolve({...resp.data, status: resp.status});
            })
            .catch((err: any) => {
                if (ENV.ENABLE_HTTP_LOGS) {
                    console.error('=====>', err, 'API Error');
                }
                try {
                    const response: any = (err.response) ? err.response : {data: null};
                    let error: any = (response.data) ? {...response.data} : {status: 500};
                    error.status = response.status ? parseInt(response.status) : 500;
                    if (error.status === 401) {
                        Communications.logoutSubject.next();
                    }
                    if (error.status === 403) {
                        Communications.ReloadStateSubject.next();
                    }
                    if (axios.isCancel(err)) {
                        error.status = 499;
                        error.reason = AXIOS_REQUEST_CANCELLED;
                    }
                    reject(error);
                } catch (e) {
                    console.error('=====>', e, 'Api Function Catch');
                }
            });
    });
}

export default ApiService;
