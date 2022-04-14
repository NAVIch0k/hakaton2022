import React from 'react'

// STYLES
import style from './header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__wrap}>
        <nav className={style.header__navigation}>
          <a href="#about" className={style.header__link}>
            О хакатоне
          </a>
          {/* <a href="#tasks" className={style.header__link}>
            Задачи
          </a> */}
          <a href="#who" className={style.header__link}>
            Для кого
          </a>
          {/* <a href="#reg" className={style.header__link}>
            Регистрация
          </a> */}
          <a href="#address" className={style.header__link}>
            Площадки проведения
          </a>
          <a href="#contact" className={style.header__link}>
            Контакты
          </a>
        </nav>
        <div className={style.header__preview}></div>
        <h2 className={style.header__telegramm}>«Создание чат - бота» </h2>

        <div className={style.header__education}>
          {/* <div className={style.header__departament}>
            <h2 className={style.header__title}>Департамент образования и науки города Москвы</h2>
            <img className={style.header__departamentImage} src="/image/departament.png" />
          </div> */}
          <div className={style.header__organization}>
            <h3 className={style.header__subtitle}>Организаторы</h3>
            <div className={style.header__list}>
              <div className={style.header__item}>
                <div>
                  <p className={style.header__name}>Колледж связи №54 имени П. М. Вострухина</p>
                  <a href="https://rutube.ru/video/b3cc919d389c35088456d018840600d4/" className={style.header__translation}>Смотреть трансляцию</a>
                </div>
                <img className={style.header__image} src="/image/ks54.png" alt="Колледж связи" />
              </div>
              <div className={style.header__item}>
                <div>
                  <p className={style.header__name}>Колледж автоматизации и информационных технологий №20</p>
                  <a href="https://rutube.ru/video/8ddb3430e71e2d9db12647b606dbaccb/" className={style.header__translation}>Смотреть трансляцию</a>
                </div>
                <img className={style.header__image} src="/image/MGKEIT.png" alt="КАИТ" />
              </div>
              <div className={style.header__item}>
                <div>
                  <p className={style.header__name}>Московский государственный колледж электромеханики и информационных технологий</p>
                  <a href="https://rutube.ru/video/b2f9be110e1b0008d154aa9dbddab81a/" className={style.header__translation}>Смотреть трансляцию</a>
                </div>
                <img className={style.header__image} src="/image/KAIT.png" alt="МГКЭИТ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
