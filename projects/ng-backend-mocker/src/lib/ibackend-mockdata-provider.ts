import { ResponseCheckPoint } from "./response-checkpoint";



export interface IBackendMockDataProvider{

    getAllInteractions():ResponseCheckPoint[];
}