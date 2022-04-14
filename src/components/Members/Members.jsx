import React from 'react'

// STYLES
import style from './members.module.scss'

const Members = () => {
  return (
    <div className={style.members}>
      <h2 id="who" className={style.members__title}>
        Для кого?
      </h2>
      <p className={style.members__subtitle}>В хакатоне могут принять участие:</p>
      <div className={style.members__list}>
        <div className={style.members__col}>
          <div className={style.members__item}>
            <img className={style.members__image + ' ' + style.members__image_pupils} src="image/pupils.svg" alt="Школьники" />
            <p className={style.members__text}>Школьники 10-11 классов</p>
          </div>
          <div className={style.members__item}>
            <img className={style.members__image + ' ' + style.members__image_studens} src="image/students.svg" alt="Студенты" />
            <p className={style.members__text}>Студенты колледжей</p>
          </div>
        </div>
        <div className={style.members__item + ' ' + style.members__item_last}>
          <p className={style.members__text + ' ' + style.members__text_margin}>Участники объединяются в коллективы от 2 до 4 человек.</p>
          <p className={style.members__text}>
            Лидер команды – участник команды, определенный образовательной организацией, уполномоченный представлять интересы команды в период проведения
            хакатона.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Members
