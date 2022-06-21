import { INewCartProduct } from './INewCartProduct'

export interface IAddProductToCart {
  user_id: string,
  cartProduct: INewCartProduct
}
