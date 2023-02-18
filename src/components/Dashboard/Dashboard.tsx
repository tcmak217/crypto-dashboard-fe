import React, { useEffect, useState } from "react"
import { getAllQuote } from "../../services/getQuote"
import { IQuotes } from "../../types/quotes"
import Quote from "../Quote/Quote"

function Dashboard() {
  const [quotes, setQuotes] = useState<IQuotes | undefined>()

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

  return <></>
}

export default Dashboard
