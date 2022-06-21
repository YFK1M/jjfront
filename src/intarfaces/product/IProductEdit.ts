import { IProductImages } from './IProductImages'

export interface IProductEdit {
  productsType_id: string,
  price: number,
  title: string,
  description: string,
  productImage: Array<IProductImages>
}