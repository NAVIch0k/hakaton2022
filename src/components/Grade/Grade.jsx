import React from 'react'

// STYLES
import style from './grade.module.scss'

const Grade = () => {
  return (
    <div className={style.grade}>
      <h2 className={style.grade__title}>Критерии оценки проектов</h2>
      <div className={style.grade__list}>
        <p className={style.grade__text}>Разнообразие функционала</p>
        <p className={style.grade__text}>Целесообразность введения</p>
        <p className={style.grade__text}>Масштабируемость проекта</p>
        <p className={style.grade__text}>Соответствие техническому заданию</p>
        <p className={style.grade__text}>Творческий подход</p>
        <p className={style.grade__text}>Возможность популяризировать продукт</p>
      </div>
    </div>
  )
}

export default Grade
