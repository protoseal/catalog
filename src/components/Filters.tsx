import { CatalogItemCategory } from "@shared/models"
import classNames from "classnames"
import { FC } from "react"

const FILTER_CONFIG = [
  {
    title: "Браслеты",
    value: "bracelet",
  },
  {
    title: "Кольца",
    value: "ring",
  },
  {
    title: "Серьги",
    value: "earring",
  },
  {
    title: "Жгуты",
    value: "tourniquet",
  },
  {
    title: "Колье",
    value: "necklace",
  },
  {
    title: "Комплекты",
    value: "set",
  },
]

type Props = {
  activeFilter: CatalogItemCategory | null
  setActiveFilter: (value: CatalogItemCategory | null) => void
  scrollToCatalog: () => void
}

export const Filters: FC<Props> = ({ activeFilter, setActiveFilter, scrollToCatalog }) => {
  const handleFilterButtonClick = (category: CatalogItemCategory) => {
    setActiveFilter(category === activeFilter ? null : category)
    scrollToCatalog()

    if (activeFilter === category) {
      sessionStorage.removeItem("filter")
    } else {
      sessionStorage.setItem("filter", category)
    }
  }

  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-5">
      {FILTER_CONFIG.map((item, index) => (
        <li key={index}>
          <button
            className={classNames(
              "aspect-square w-full rounded-md p-5 text-white transition-colors",
              {
                ["bg-green-500 text-black"]: item.value === activeFilter,
                ["bg-gray-400"]: item.value !== activeFilter,
              },
            )}
            onClick={() => handleFilterButtonClick(item.value as CatalogItemCategory)}
          >
            <span className="text-xl font-light">{item.title}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
