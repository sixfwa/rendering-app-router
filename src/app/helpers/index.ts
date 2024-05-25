import { NotionDatabaseResponse, Quote } from "@/app/types"

const cleanQuotes = (data: NotionDatabaseResponse): Quote[] => {
  const cleanData: Quote[] = []

  data.results.forEach((e) => {
    const author = e.properties.Author.rich_text[0].plain_text
    const quote = e.properties.Quote.title[0].plain_text
    cleanData.push({ author, quote })
  })

  return cleanData
}

export { cleanQuotes }
