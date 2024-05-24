import Link from "next/link"

const BackButton = () => {
  return (
    <Link
      href="/"
      className="-my-3 border w-min px-4 py-1 rounded text-sm border-neutral-700"
    >
      Back
    </Link>
  )
}

export default BackButton
