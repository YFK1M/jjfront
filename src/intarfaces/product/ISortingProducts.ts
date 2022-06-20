import { IProduct } from './IProduct'

export interface ISortingProducts {
  _id: string,
  title: string,
  products: Array<IProduct>
}