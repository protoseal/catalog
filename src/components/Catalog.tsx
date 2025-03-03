import { CatalogItem } from "@shared/models"
import { FC } from "react"
import { CatalogCard } from "./CatalogCard"

type Props = {
  items: CatalogItem[]
}

export const Catalog: FC<Props> = ({ items }) => {
  return (
    <ul className="flex flex-wrap gap-10">
      {items.map((item) => (
        <li key={item.id}>
          <CatalogCard data={item} />
        </li>
      ))}
    </ul>
  )
}
