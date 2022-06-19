import { FC, ReactChild } from 'react'
import s from './Product.module.sass'
import { Link } from 'react-router-dom'

interface IProduct {
  children?: ReactChild,
  id: string,
  title: string,
  price: number,
  image: string,
}

const Product : FC<IProduct> = ({id, image, title, price}) => {
    return (
        <Link to={`/product?id=${id}`} className={s.product}>
            <img className={s.product__img} src={image} alt={title} />
            <button className={s.product__btn}>{price} руб.</button>
        </Link>
    )
}

export default Product