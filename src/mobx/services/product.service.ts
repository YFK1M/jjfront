import { host } from '../../assets/constants/host.constant'
import { IProductsTypeCreate } from '../../intarfaces/product/IProductTypeInterface'

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
}

export default ProductService