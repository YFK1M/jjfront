import { host } from '../../assets/constants/host.constant';

class ProductService {

  getProduct = async () => {
    return fetch(`${host}/product/all-products`).then(data => data.json())
  }
}

export default ProductService