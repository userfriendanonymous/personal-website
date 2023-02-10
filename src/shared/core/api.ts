import axios, {AxiosResponse} from "axios"
import LOCATION from "./locationUtils"
import QUERIES from "./queriesUtils"

interface GetUser {
    name: string
}

interface GetUnitResponse {
    isSuccess: boolean,
    content?: string,
}

class Api {
    readonly endpoints: string[]

    constructor(endpoints: string[]){
        this.endpoints = endpoints
    }

    async request(points: string[], queries?: object, method?: string, options?: object, data?: object): Promise<AxiosResponse> {
        try {
            return await axios({
                method,
                data,
                url: LOCATION.build([...this.endpoints, ...points], queries),
                ...options,
            })

        } catch(error: any){
            console.log(error)
            return error.response
        }
    }

    async get(points: string[], queries?: object, options?: object): Promise<AxiosResponse> {
        return await this.request(points, queries, 'GET', options)
    }

    async post(points: string[], queries: object, body: object, options?: object): Promise<AxiosResponse> {
        return await this.request(points, queries, 'POST', options, body)
    }

    async getUnit(data: GetUser): Promise<GetUnitResponse> {
        const response = await this.get(['users', data.name])
        if (response.statusText !== 'OK'){
            return {isSuccess: false}
        }
        return {isSuccess: true, content: response.data.content}
    }
}

const api = new Api(['api'])
export default api