import { IQuote } from "../../types/quotes"

function Quote({ quote }: { quote: IQuote }) {
  return (
    <>
      <div className="rounded-lg border-gray-300 p-2 border-2 min-w-[320px] mr-2 my-2">
        <div className="text-4xl font-bold mb-2">{quote.cryptoName}</div>
        <div className="text-xl my-2 font-bold text-orange-400">${quote.price}</div>
        <div className="flex">
          <div className="flex-col w-1/2">
            <div className="">volume:</div>
            <div className="text-gray-500">{quote.volume}</div>
          </div>
          <div className="flex-col w-1/2">
            <div className="">change:</div>
            <div className={`${quote.change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {quote.change}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quote
