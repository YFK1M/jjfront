import { IProductImages } from '../product/IProductImages'

export interface IProductAmount {
  _id: string,
  amount: number,
  productsType_id: string,
  price: number,
  title: string,
  description: string
  productImage: Array<IProductImages>
}