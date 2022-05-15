import { makeAutoObservable, toJS } from 'mobx';
import ProductService from '../services/product.service';

class ProductStore {

  productService = new ProductService()
  product = []

  constructor() {
    makeAutoObservable(this)
    this.loadProducts();
  }

  getIncompleteProducts = (count: number) => {
    const productSize = this.product.length
    console.log(toJS(this.product));
    return this.product.slice(productSize - count, productSize)
  }

  loadProducts = async () => {
    this.product = await this.productService.getProduct();
  };
}

export default new ProductStore()