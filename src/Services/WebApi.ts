
import axios, { AxiosResponse } from 'axios';
import { Root } from '../Models/Beans';
class WebApi {

    private url = "https://www.googleapis.com/books/v1/volumes";

    public searchBooks(val: string): Promise<AxiosResponse<Root>> {
        console.log("Watch out!!! "+ val);
        return axios.get<Root>(this.url+"?q="+val);
    }

}

const webApi = new WebApi();
export default webApi;