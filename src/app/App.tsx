import { Header } from "@components/Header"
import { FC } from "react"
import { Outlet } from "react-router-dom"

import "./assets/styles/index.css"

export const App: FC = () => {
  return (
    <div className="flex min-h-screen w-full max-w-md flex-col text-white">
      <Header />
      <Outlet />
    </div>
  )
}
