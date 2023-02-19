import { useEffect, useState } from "react"
import { getAllQuote } from "../../services/getQuote"
import { IQuote } from "../../types/quotes"
import Quote from "../Quote/Quote"

function Dashboard() {
  const [quotes, setQuotes] = useState<IQuote[] | undefined>()

  async function fetchQuote() {
    try {
      const quoteData = await getAllQuote()
      console.log(quoteData)
      setQuotes(quoteData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <>
      <h1 className="font-bold text-4xl my-4">Cryptocurrency Realtime Price</h1>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {quotes && quotes.map((quote) => <Quote key={quote.id} quote={quote}></Quote>)}
      </div>
    </>
  )
}

export default Dashboard
