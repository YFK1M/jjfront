import { FC } from 'react';
import s from './Main.module.sass';
import { bannersArray } from './bannersArray';
import Banner from './Banner/Banner';

const Main: FC = () => {

  const banners = bannersArray.map((val) =>
    <Banner key={val.id} bannerNumber={val.bannerNumber}
            bannerBackgroundUrl={val.bannerBackgroundUrl} h2={val.h2} p={val.p}
            link={val.link}
            small={val.small} />);

  return (
    <div className={s.main}>
      <div className={s.main__banners}>
        {banners}
      </div>
      <div className={s.main__products}></div>
    </div>
  );
};

export default Main;