import React, { FC, ReactNode } from 'react'
import s from './Product.module.sass'
import { Link } from 'react-router-dom'

interface IProduct {
  children?: ReactNode,
  id: string,
  title: string,
  price: number,
  image: string,
}

const Product : FC<IProduct> = ({id, image, title, price}) => {
    return (
        <div className={s.product}>
            <img className={s.product__img} src={image} alt={title} />
            <p className={s.product__btn}>{price} руб.</p>
        </div>
    )
}

export default Product