import ArrowIcon from "@app/assets/icons/arrow.svg?react"
import { Catalog } from "@components/Catalog"
import { Filters } from "@components/Filters"
import { useScrollPercentage } from "@hooks/useScrollPercentage"
import { CatalogItem, CatalogItemCategory } from "@shared/models"
import { CATALOG } from "@shared/models/catalog"
import { FC, useEffect, useRef, useState } from "react"

export const Main: FC = () => {
  const [activeFilter, setActiveFilter] = useState<CatalogItemCategory | null>(
    localStorage.getItem("filter") as CatalogItemCategory | null,
  )
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>(CATALOG)
  const scrollPercent = useScrollPercentage()
  const catalogRef = useRef<HTMLElement | null>(null)

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const handleScrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (activeFilter) {
      setCatalogItems(CATALOG.filter((item) => item.category === activeFilter))
    } else {
      setCatalogItems(CATALOG)
    }
  }, [activeFilter])

  return (
    <main className="animate-onset relative flex flex-col gap-10 px-5 py-10">
      <section className="flex flex-col gap-5">
        <h2 className="text-center text-2xl font-light">Фильтры</h2>
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          scrollToCatalog={handleScrollToCatalog}
        />
      </section>

      <section className="flex flex-col gap-5" ref={catalogRef}>
        <h2 className="text-center text-2xl font-light">Каталог</h2>

        {catalogItems.length > 0 ? (
          <Catalog items={catalogItems} />
        ) : (
          <span className="w-[408px] text-center text-xl">Изделия не найдены</span>
        )}
      </section>

      {scrollPercent > 40 && (
        <div
          className="fixed bottom-7 right-7 flex cursor-pointer items-center justify-center rounded-full bg-white p-3 transition-colors hover:bg-gray-300"
          onClick={handleScrollTop}
        >
          <ArrowIcon className="h-6 w-6" />
        </div>
      )}
    </main>
  )
}
