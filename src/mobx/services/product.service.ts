import { host } from '../../assets/constants/host.constant'
import { IProductsTypeCreate } from '../../intarfaces/product/IProductTypeInterface'
import { IProductCreate } from '../../intarfaces/product/IProductCreate'
import { IProductImagesCreate } from '../../intarfaces/product/IProductImagesCreate'
import { IProduct } from '../../intarfaces/product/IProduct'
import { IProductEdit } from '../../intarfaces/product/IProductEdit'

class ProductService {

    getProductsTypes = async () => {
        return fetch(`${host}/product/all-types`).then(data => data.json())
    }

    getProductsByProductTypeId = async (productTypeId: string) => {
        return fetch(`${host}/product/products-by-type/${productTypeId}`).then(data => data.json())
    }

    getProduct = async () => {
        return fetch(`${host}/product/all-products`).then(data => data.json())
    }

    setProductType = async (category: IProductsTypeCreate) => {
        return fetch(`${host}/product/type/create`, {method: 'POST', body: JSON.stringify(category), headers: {'Content-Type': 'application/json'}})
    }

    setProduct = async (product: IProductCreate) => {
        return fetch(`${host}/product/create`, {method: 'POST', body: JSON.stringify(product), headers: {'Content-Type': 'application/json'}})
    }

    updateProduct = async (id: string, product: IProductCreate) => {
        return fetch(`${host}/product/${id}`, {method: 'PUT', body: JSON.stringify(product), headers: {'Content-Type': 'application/json'}})
    }

    setProductImage = async (image: IProductImagesCreate) => {
        return fetch(`${host}/product/add-product-image`, {method: 'POST', body: JSON.stringify(image), headers: {'Content-Type': 'application/json'}})
    }

    updateProductImage = async (id: string, productImage: IProductImagesCreate) => {
        return fetch(`${host}/product/image/${id}`, {method: 'PUT', body: JSON.stringify(productImage), headers: {'Content-Type': 'application/json'}})
    }

    deleteProductType = async (id: string) => {
        return fetch(`${host}/product/type/${id}`, {method: 'DELETE'})
    }

    deleteProduct = async (id: string) => {
        return fetch(`${host}/product/delete/${id}`, {method: 'DELETE'})
    }

    updateProductType = async (id: string, category: IProductsTypeCreate) => {
        return fetch(`${host}/product/type/${id}`, {method: 'PUT', body: JSON.stringify(category), headers: {'Content-Type': 'application/json'}})
    }
}

export default ProductService