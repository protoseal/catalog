export type CatalogItemCategory =
  | "bracelet"
  | "earring"
  | "ring"
  | "tourniquet"
  | "set"
  | "necklace"

export type CatalogItemSpecifications = {
  bead?: string
  zipper?: string
  length?: string
  width?: string
}

export type CatalogItem = {
  id: number
  name: string
  category: CatalogItemCategory
  price: number
  description: string
  imgFolderName: string
  imgCount: number
  specifications: CatalogItemSpecifications
}

export enum CatalogItemCategoryMap {
  bracelet = "Браслет",
  earring = "Серьги",
  ring = "Кольцо",
  tourniquet = "Жгут",
  set = "Комплект",
  necklace = "Ожерелье",
}
