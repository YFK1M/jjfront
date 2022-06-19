import { makeAutoObservable, toJS } from 'mobx'
import ProductService from '../services/product.service'
import { IProductsType, IProductsTypeCreate } from '../../intarfaces/product/IProductTypeInterface'
import { ISortingProducts } from '../../intarfaces/product/ISortingProducts'

class ProductStore {

    productService = new ProductService()
    productTypes: Array<IProductsType> = []
    product = []
    sortingProducts : Array<ISortingProducts>= []

    constructor() {
        makeAutoObservable(this)
        this.loadProductsTypes().then(
            () => this.loadSortingProducts()
        )
    }

    getSortingProducts = () => {
        return this.sortingProducts
    }

    getProductsByProductType = (productTypeId: string) => {
        return this.productService.getProductsByProductTypeId(productTypeId)
    }

    getAllProducts = () => {
        return this.product
    }

    setProductType = async (category: IProductsTypeCreate) => {
        await this.productService.setProductType(category)
        await this.loadProductsTypes()
        await this.loadSortingProducts()
    }

    getIncompleteProducts = (count: number) => {
        const productSize = this.product.length
        return this.product.slice(productSize - count, productSize)
    }

    loadProducts = async () => {
        this.product = await this.productService.getProduct()
    }

    loadProductsTypes = async () => {
        this.productTypes = await this.productService.getProductsTypes()
    }

    loadSortingProducts = async () => {
        this.sortingProducts = await Promise.all(
            this.productTypes.map( async productType => {
                return {
                    _id: productType._id,
                    title: productType.title,
                    products: await this.getProductsByProductType(productType._id)
                }
            })
        )
    }
}

export default new ProductStore()