import { FC } from 'react'
import s from './Main.module.sass'
import { bannersArray } from './bannersArray'
import Banner from './Banner/Banner'
import Product from './Product/Product'
import ProductStore from '../../../mobx/stores/product.store'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { Link } from 'react-router-dom'

const Main: FC = observer(() => {

    const productArray: Array<any> = ProductStore.getIncompleteProducts(5)

    const banners = bannersArray.map((val) =>
        <Banner key={val.id} bannerNumber={val.bannerNumber}
            bannerBackgroundUrl={val.bannerBackgroundUrl} h2={val.h2} p={val.p}
            link={val.link}
            small={val.small} />)

    const products = productArray.map((val) =>
        <Product
            key={val.id}
            id={val.id}
            title={val.title}
            price={val.price}
            image={val.productImage[0].image_url}
        />)

    return (
        <div className={s.main}>
            <div className={s.main__banners}>
                {banners}
            </div>
            <div className={s.main__products}>
                <h3 className={s.main__products_h3}>Мерч</h3>
                <div className={s.main__products_wrapper}>
                    {products}
                </div>
                <Link to={'/merch'}>
                    <button className={s.main__products_btn}>Каталог</button>
                </Link>
            </div>
        </div>
    )
})

export default Main