import { Slider } from "@components/Slider"
import { CatalogItem } from "@shared/models"
import { CATALOG } from "@shared/models/catalog"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

enum SpecificationsLabelMap {
  bead = "Материал",
  zipper = "Застежка",
  length = "Длина на фото",
  width = "Ширина на фото",
}

export const CardPage: FC = () => {
  const urlData = useParams()
  const [item, setItem] = useState<CatalogItem | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    if (urlData.id) {
      const catalogItem = CATALOG.find((item) => item.id === Number(urlData.id))
      if (!catalogItem) return
      setItem(catalogItem)
    }
  }, [])

  return (
    <main className="animate-onset flex flex-col gap-5 px-5 pb-10">
      {item !== null ? (
        <>
          <Slider
            imgFolderName={item.imgFolderName}
            imgCount={item.imgCount}
            category={item.category}
          />

          <h2 className="text-3xl font-bold">{item.name}</h2>
          <p>{item.description}</p>
          <span className="font-light opacity-60">Размеры изделия подбираются индвидуально</span>

          {Object.keys(item.specifications).length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-light">Характеристики</h2>

              <ul>
                {Object.keys(item.specifications).map((spec, index) => (
                  <li className="flex justify-between border-b border-white/20 py-2" key={index}>
                    <span>
                      {SpecificationsLabelMap[spec as keyof typeof SpecificationsLabelMap]}
                    </span>
                    <span> {item.specifications[spec as keyof typeof item.specifications]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <h2>Элемент не найден</h2>
      )}
    </main>
  )
}
