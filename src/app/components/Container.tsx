interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <main className="md:w-1/2 w-11/12 mx-auto mt-10 flex flex-col gap-10">
      {children}
    </main>
  )
}

export default Container
