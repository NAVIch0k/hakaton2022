import React from 'react'

// STYLES
import style from './goals.module.scss'

const Goals = () => {
  return (
    <div className={style.goals}>
      <div className={style.goals__wrap}>
        <h2 className={style.goals__title}>Цели хакатона</h2>
        <div className={style.goals__list}>
          <div className={style.goals__item}>
            <h3 className={style.goals__subtitle}>1.</h3>
            <p className={style.goals__text}>Выявление талантливой и инициативной молодежи</p>
          </div>
          <div className={style.goals__item}>
            <h3 className={style.goals__subtitle}>2.</h3>
            <p className={style.goals__text}>Расширение творческих связей и обмен новыми идеями</p>
          </div>
          <div className={style.goals__item}>
            <h3 className={style.goals__subtitle}>3.</h3>
            <p className={style.goals__text}>Создание общедоступных социально значимых в области IT цифровых продуктов</p>
          </div>
          <div className={style.goals__item}>
            <h3 className={style.goals__subtitle}>4.</h3>
            <p className={style.goals__text}>Формирование ранней профессиональной ориентации</p>
          </div>
          <div className={style.goals__item}>
            <h3 className={style.goals__subtitle}>5.</h3>
            <p className={style.goals__text}>Развитие профессиональных навыков и умений, применительно к реальным условиям труда</p>
          </div>
          <div className={style.goals__item}>
            <h3 className={style.goals__subtitle}>6.</h3>
            <p className={style.goals__text}>Знакомство и выстраивание дальнейшего сотрудничества с командами-участниками хакатона</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals
