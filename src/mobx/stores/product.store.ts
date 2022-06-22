import { makeAutoObservable } from 'mobx'
import ProductService from '../services/product.service'
import { IProductsType, IProductsTypeCreate } from '../../intarfaces/product/IProductTypeInterface'
import { ISortingProducts } from '../../intarfaces/product/ISortingProducts'
import { IProductCreate } from '../../intarfaces/product/IProductCreate'
import { IProductImagesCreate } from '../../intarfaces/product/IProductImagesCreate'
import { IProductEdit } from '../../intarfaces/product/IProductEdit'

class ProductStore {

    productService = new ProductService()
    productTypes: Array<IProductsType> = []
    product: Array<any> = []
    sortingProducts : Array<ISortingProducts>= []

    constructor() {
        makeAutoObservable(this)
        this.loadProducts()
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

    setProduct = async (product: IProductCreate) => {
        await this.productService.setProduct(product)
        await this.loadSortingProducts()
    }

    updateProduct = async (id: string, product: IProductCreate) => {
        await this.productService.updateProduct(id, product)
        await this.loadSortingProducts()
    }

    setProductImage = async (image: IProductImagesCreate) => {
        await this.productService.setProductImage(image)
        await this.loadSortingProducts()
    }

    updateProductImage = async (id: string, productImage: IProductImagesCreate) => {
        await this.productService.updateProductImage(id, productImage)
        await this.loadSortingProducts()
    }

    deleteProductType = async (id: string) => {
        await this.productService.deleteProductType(id)
        await this.loadProductsTypes()
        await this.loadSortingProducts()
    }

    deleteProduct = async (id: string) => {
        await this.productService.deleteProduct(id)
        await this.loadSortingProducts()
    }

    updateProductType = async (id: string, category: IProductsTypeCreate) => {
        await this.productService.updateProductType(id, category)
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