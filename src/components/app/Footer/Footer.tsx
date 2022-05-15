import { FC } from 'react';
import s from './Footer.module.sass';
import { footerLinks } from './footerLinks';

const Footer: FC = () => {

  const links = footerLinks.map(val => <img className={s.footer__link} key={val.id} src={val.src} alt={val.alt} />)

  return (
    <div className={s.footer}>
      <div className={s.footer__wrapper}>
        {links}
      </div>
    </div>
  )
}

export default Footer