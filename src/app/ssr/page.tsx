import Container from "@/app/components/Container"
import Header from "@/app/components/Header"
import { Post } from "../types"
import BackButton from "../components/BackButton"

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  })
  const data: Post[] = await res.json()
  return data
}

export default async function SSR() {
  const posts = await getPosts()
  return (
    <Container>
      <Header>Server-Side Rendering</Header>
      <BackButton />
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-3 border rounded border-neutral-700 flex flex-col gap-2"
          >
            <h2 className="text-xl font-bold tracking-tight">{post.title}</h2>
            <p className="text-neutral-200 tracking-wide">{post.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}
