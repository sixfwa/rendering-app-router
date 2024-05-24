import Link from "next/link"
import Container from "@/app/components/Container"
import Header from "@/app/components/Header"

export default function Home() {
  return (
    <Container>
      <Header>NextJS App Router Rendering YouTube</Header>
      <ul className="flex flex-col gap-8">
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/csr"
          >
            Client-Side Rendering
          </Link>
        </li>
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/ssr"
          >
            Server-Side Rendering
          </Link>
        </li>
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/"
          >
            Static Site Generation
          </Link>
        </li>
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/"
          >
            Incremental Static Regeneration
          </Link>
        </li>
      </ul>
    </Container>
  )
}
