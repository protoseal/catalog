import ArrowLeftIcon from "@app/assets/icons/arrow-left.svg?react"
import { FC } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const Header: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className="flex w-full items-center justify-between gap-2 p-5">
      {location.pathname.startsWith("/items/") && (
        <button className="animate-onset" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="h-10 w-10 stroke-white" />
        </button>
      )}

      <Link to="/">
        <h1 className="font-serif text-2xl font-light tracking-wider">✨Bead Craft🌀</h1>
      </Link>
    </header>
  )
}
