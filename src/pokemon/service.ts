import axios, { AxiosInstance } from "axios";
import { Pokemon } from "./pokemon";

const API_URL = "https://pokeapi.co/api/v2/";

export class PokemonService {
  #axiosInstance: AxiosInstance;
  constructor(url: string = API_URL) {
    this.#axiosInstance = axios.create({
      baseURL: url
    });
  }
  getById = async (id: number) => {
    try {
      const { data } = await this.#axiosInstance.get<Pokemon>(`pokemon/${id.toString()}/`);
      return data;
    } catch (err) {
      throw err;
    }
  };
  getByName = async (name: string) => {
    try {
      const { data } = await this.#axiosInstance.get<Pokemon>(`pokemon/${name}/`);
      return data;
    } catch (err) {
      throw err;
    }
  };

  
}
