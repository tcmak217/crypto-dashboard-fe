export interface IQuote {
  id: number
  symbol: string
  price: string
  volume: string
  change: number
}

export interface IQuotes {
  quotes: IQuote[]
}
