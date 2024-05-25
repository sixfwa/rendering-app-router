import Container from "@/app/components/Container"
import Header from "@/app/components/Header"
import BackButton from "@/app/components/BackButton"
import { cleanQuotes } from "@/app/helpers"

async function getQuotes() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_SECRET_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      method: "POST",
      cache: "force-cache",
    }
  )

  const data = await res.json()

  const quotes = cleanQuotes(data)

  return quotes
}

export default async function SSG() {
  const quotes = await getQuotes()
  return (
    <Container>
      <Header>Static Site Generation</Header>
      <BackButton />
      <ul className="flex flex-col gap-2">
        {quotes.map((quote) => (
          <li
            key={quote.quote}
            className="p-3 border rounded border-neutral-700 flex flex-col gap-2"
          >
            <h2 className="tracking-wide">{quote.quote}</h2>
            <p className="italic font-thin">{quote.author}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}
