import { host } from '../../assets/constants/host.constant'
import axios from 'axios'
import { IAddProductToCart } from '../../intarfaces/cart/IAddProductToCart'
import { IChangeProductAmountInCart } from '../../intarfaces/cart/IChangeProductAmountInCart'
import { IAddTicketToCart } from '../../intarfaces/cart/IAddTicketToCart'
import { toJS } from 'mobx'

class CartService {

    createCustomerCart = async (userId: string) => {
        return axios.post(`${host}/cart/create-customer-cart`, {user_id: userId})
    }

    removeCustomerCart = async (userId: string) => {
        return axios.delete(`${host}/cart/delete-customer-cart/${userId}`)
    }

    getCustomerCart = async (userId: string) => {
        return axios.get(`${host}/cart/get-customer-cart/${userId}`)
    }

    addProductToCart = async (product: IAddProductToCart) => {
        return axios.post(`${host}/cart/add-product-to-cart`, product)
    }

    addTicketToCart = async (ticket: IAddTicketToCart) => {
        console.log(toJS(ticket))
        return axios.post(`${host}/cart/add-ticket-to-cart`, ticket)
    }

    changeProductAmountInCart = async (product: IChangeProductAmountInCart) => {
        return axios.post(`${host}/cart/change-product-amount-in-cart`, product)
    }
}

export default CartService