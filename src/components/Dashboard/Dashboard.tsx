import React, { useEffect, useState } from "react"
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

  return <>{quotes && quotes.map((quote) => <div key={quote.id}>{quote.symbol}</div>)}</>
}

export default Dashboard
