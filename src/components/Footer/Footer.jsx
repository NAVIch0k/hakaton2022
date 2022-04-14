import React from 'react'

// STYLES
import style from './footer.module.scss'
const Footer = () => {
  return (
    <div id="contact" className={style.footer}>
      <p className={style.footer__text}>Контактные данные: +7&nbsp;999&nbsp;833&nbsp;79&nbsp;70</p>
      <p className={style.footer__text}>Хакатон “Поколение IT” 2022</p>
      <p className={style.footer__text}>г. Москва</p>
    </div>
  )
}

export default Footer
