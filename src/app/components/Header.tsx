interface Props {
  children: React.ReactNode
}

const Header = ({ children }: Props) => {
  return <h1 className="text-3xl font-extrabold tracking-tight">{children}</h1>
}

export default Header
