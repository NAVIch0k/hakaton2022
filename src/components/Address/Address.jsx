import React from 'react'

// STYLES
import style from './address.module.scss'

const Address = () => {
  return (
    <div className={style.address}>
      <div className={style.address__wrap}>
        <h2 id="address" className={style.address__title}>
          Площадки проведения. Как добраться?
        </h2>
        <div className={style.address__maps}>
          <div className={style.address__item}>
            <img className={style.address__map} src="image/map.png" />
            <div className={style.address__container}>
              <h3 className={style.address__name}>Колледж связи № 54 им. П. М. Вострухина</h3>
              <div className={style.address__block}>
                <p className={style.address__text}>Адрес:</p>
                <p className={style.address__text}>г. Москва, ул. Кирпичная, д.33</p>
              </div>
              <div className={style.address__block}>
                <p className={style.address__text}>Контактный телефон:</p>
                <p className={style.address__text}>+7 999 833-79-70</p>
              </div>

              <div className={style.address__block}>
                <p className={style.address__text}>Почта:</p>
                <p className={style.address__text}>fkazihanov@mail.ru</p>
              </div>

              <div className={style.address__block}>
                <p className={style.address__text}>Организатор:</p>
                <p className={style.address__text}>Казиханов Фарид Ибадуллахович</p>
              </div>
            </div>
          </div>

          <div className={style.address__item}>
            <img className={style.address__map} src="image/map2.png" />
            <div className={style.address__container}>
              <h3 className={style.address__name}>Колледж автоматизации и информационных технологий №20</h3>
              <div className={style.address__block}>
                <p className={style.address__text}>Адрес:</p>
                <p className={style.address__text}>г. Москва, 1-я Мясниковская улица, д.16.</p>
              </div>
              <div className={style.address__block}>
                <p className={style.address__text}>Контактный телефон:</p>
                <p className={style.address__text}>+7 967 085-76-04</p>
              </div>

              <div className={style.address__block}>
                <p className={style.address__text}>Почта:</p>
                <p className={style.address__text}>ithakaton@kait20.ru</p>
              </div>

              <div className={style.address__block}>
                <p className={style.address__text}>Организатор:</p>
                <p className={style.address__text}>Павлова Елена Викторовна</p>
              </div>
            </div>
          </div>

          <div className={style.address__item}>
            <img className={style.address__map} src="image/map3.png" />
            <div className={style.address__container}>
              <h3 className={style.address__name}>Московский государственный колледж электромеханики и информационных технологий</h3>
              <div className={style.address__block}>
                <p className={style.address__text}>Адрес:</p>
                <p className={style.address__text}>г. Москва, ул. Академика Миллионщикова, д.20.</p>
              </div>
              <div className={style.address__block}>
                <p className={style.address__text}>Контактный телефон:</p>
                <p className={style.address__text}>+7 950 105-03-80</p>
              </div>

              <div className={style.address__block}>
                <p className={style.address__text}>Почта:</p>
                <p className={style.address__text}>mihailenko_ma@mgkeit.pro</p>
              </div>

              <div className={style.address__block}>
                <p className={style.address__text}>Организатор:</p>
                <p className={style.address__text}>Михайленко Максим Александрович</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
