import { IProductImages } from './IProductImages'

export interface IProduct {
  _id: string,
  productsType_id: string,
  price: number,
  title: string,
  description: string
  productImage: Array<IProductImages>
}