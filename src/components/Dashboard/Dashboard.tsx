import { useEffect, useState } from "react"
import { IQuote } from "../../types/quotes"
import Quote from "../Quote/Quote"
import webSocket from "socket.io-client"

function Dashboard() {
  const [quotes, setQuotes] = useState<IQuote[] | undefined>()
  const [ws, setWs] = useState<any>()

  useEffect(() => {
    const socket = webSocket("http://localhost:3000")
    socket.emit("quotes", "")
    setWs(socket)
  }, [])

  useEffect(() => {
    if (ws) {
      ws.on("quotes", (quotes: IQuote[]) => {
        setQuotes(quotes.sort((a, b) => b.price - a.price))
      })
    }
  }, [ws])

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
