import { makeAutoObservable, toJS } from 'mobx'
import CartService from '../services/cart.service'
import { IAddProductToCart } from '../../intarfaces/cart/IAddProductToCart'
import { IProductAmount } from '../../intarfaces/cart/IProductAmount'

export interface ICart {
  _id: string,
  user_id: string,
    cart: Array<IProductAmount>
  __v?: any
}

class CartStore {

    cartService = new CartService()
    cart: null | ICart = null
    cartLoad = false

    constructor() {
        makeAutoObservable(this)
    }

    createCustomerCart = async (userId: string) => {
        await this.cartService.createCustomerCart(userId)
    }

    removeCustomerCart = async (userId: string) => {
        await this.cartService.removeCustomerCart(userId)
        await this.getCustomerCart
    }

    getCustomerCart = async (userId: string) => {
        this.cartLoad = false
        const res = await this.cartService.getCustomerCart(userId)
        this.cart = res.data
        this.cartLoad = true
        console.log(toJS(this.cart))
    }

    getCartLoad = () => {
        return this.cartLoad
    }

    getCart = () => {
        return this.cart
    }

    changeProductAmountInCart = async (product: IAddProductToCart, amountType: number) => {
        await this.cartService.changeProductAmountInCart({
            user_id: product.user_id,
            entity_id: product.cartProduct.entity_id,
            amount: product.cartProduct.amount + amountType
        })
        await this.getCustomerCart(product.user_id)
    }

    addProductToCart = async (product: IAddProductToCart) => {
        !this.cart && await this.createCustomerCart(product.user_id)
        const productCart = this.cart?.cart.find((cartProduct) => cartProduct._id === product.cartProduct.entity_id)
        productCart ?
            await this.changeProductAmountInCart(product, 1)
            :
            await this.cartService.addProductToCart(product)
        await this.getCustomerCart(product.user_id)
    }
}
export default new CartStore()