import { makeAutoObservable, toJS } from 'mobx'
import CartService from '../services/cart.service'
import { IAddProductToCart } from '../../intarfaces/cart/IAddProductToCart'
import { IAddTicketToCart } from '../../intarfaces/cart/IAddTicketToCart'
import { ICart } from '../../intarfaces/cart/ICart'

export interface ICartConst {
  _id: string,
  user_id: string,
    cart: Array<ICart>
  __v?: any
}

class CartStore {

    cartService = new CartService()
    cart: null | ICartConst = null
    cartLoad = false

    constructor() {
        makeAutoObservable(this)
    }

    createCustomerCart = async (userId: string) => {
        await this.cartService.createCustomerCart(userId)
    }

    removeCustomerCart = async (userId: string) => {
        await this.cartService.removeCustomerCart(userId)
        await this.getCustomerCart(userId)
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

    changeTicketAmountInCart = async (ticket: IAddTicketToCart, amountType: number) => {
        await this.cartService.changeProductAmountInCart({
            user_id: ticket.user_id,
            entity_id: ticket.cartTicket.entity_id,
            amount: ticket.cartTicket.amount + amountType
        })
        await this.getCustomerCart(ticket.user_id)
    }

    addProductToCart = async (product: IAddProductToCart) => {
        !this.cart && await this.createCustomerCart(product.user_id)
        const productCart = !!this.cart && this.cart.cart.find((cartProduct) => cartProduct.product._id === product.cartProduct.entity_id)
        productCart ?
            await this.changeProductAmountInCart(product, 1)
            :
            await this.cartService.addProductToCart(product)
        await this.getCustomerCart(product.user_id)
    }

    addTicketToCart = async (ticket: IAddTicketToCart) => {
        !this.cart && await this.createCustomerCart(ticket.user_id)
        const ticketCart = !!this.cart && this.cart.cart.find((cartTicket) => cartTicket.product._id === ticket.cartTicket.entity_id)
        console.log(toJS(ticket.cartTicket.amount))
        ticketCart ?
            await this.changeTicketAmountInCart(ticket, 1)
            :
            await this.cartService.addTicketToCart(ticket)
        await this.getCustomerCart(ticket.user_id)
    }
}
export default new CartStore()