import { App } from "@app/App"
import { CardPage } from "@pages/Card"
import { Main } from "@pages/Main"
import { createHashRouter } from "react-router-dom"

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/items/:id",
        element: <CardPage />,
      },
    ],
  },
])
