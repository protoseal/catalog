import { CatalogItemCategory } from "@shared/models"
import { FC } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

type Props = {
  category: CatalogItemCategory
  imgFolderName: string
  imgCount: number
}

export const Slider: FC<Props> = ({ imgFolderName, category, imgCount }) => {
  return (
    <Swiper
      className="w-full"
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      effect="fade"
      pagination
      loop
    >
      {Array.from({ length: imgCount + 1 }).map((_, index) => (
        <SwiperSlide className="!w-full" key={index}>
          <img
            className="aspect-square object-cover object-center"
            src={`/catalog/static/catalog/${category}/${imgFolderName}/${index === 0 ? "main" : index}.jpg`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
