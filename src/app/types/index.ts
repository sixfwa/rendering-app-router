export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

type Content = {
  plain_text: string
}

type DatabaseAuthor = {
  rich_text: Content[]
}

type DatabaseQuote = {
  title: Content[]
}

type Properties = {
  Author: DatabaseAuthor
  Quote: DatabaseQuote
}

type NotionDatabaseResults = {
  properties: Properties
}

export type NotionDatabaseResponse = {
  results: Array<NotionDatabaseResults>
}

export type Quote = {
  author: string
  quote: string
}
