import { host } from '../../assets/constants/host.constant'

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
}

export default ProductService