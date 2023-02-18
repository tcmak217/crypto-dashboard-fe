import axios from "axios"
import { IQuotes } from "../types/quotes"
import { api } from "./api"

export async function getAllQuote(): Promise<IQuotes> {
  const response = await axios.get(api.url + api.quotes.getAllQuotes)
  return response.data
}
