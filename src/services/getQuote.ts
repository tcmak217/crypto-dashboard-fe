import axios from "axios"
import { IQuote } from "../types/quotes"
import { api } from "./api"

export async function getAllQuote(): Promise<IQuote[]> {
  const response = await axios.get(api.url + api.quotes.getAllQuotes)
  return response.data
}
