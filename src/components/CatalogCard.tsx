import { CatalogItem, CatalogItemCategoryMap } from "@shared/models"
import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
  data: CatalogItem
}

export const CatalogCard: FC<Props> = ({ data: { category, imgFolderName, id, name, price } }) => {
  return (
    <Link to={`/items/${id}`}>
      <article className="group flex w-full flex-col items-center gap-2 overflow-clip rounded-lg border-[1px] pb-4">
        <img
          className="aspect-square object-cover object-center transition-transform group-hover:scale-110"
          src={`/catalog/static/catalog/${category}/${imgFolderName}/main.jpg`}
          loading="lazy"
        />

        <span className="mt-7 text-xl font-bold">
          {CatalogItemCategoryMap[category]} - {name}
        </span>

        <span className="text-xl font-light">{price.toLocaleString("ru")} ₽</span>
      </article>
    </Link>
  )
}
