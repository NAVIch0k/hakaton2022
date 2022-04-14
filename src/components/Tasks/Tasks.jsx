import React from 'react'

// STYLES
import style from './tasks.module.scss'

const Tasks = () => {
  return (
    <div className={style.tasks}>
      <h2 id="tasks" className={style.tasks__title}>
        Задачи по разработке чат-бота по темам:
      </h2>
      <div className={style.tasks__list}>
        <div className={style.tasks__item}>
          <h3 className={style.tasks__subtitle}>1</h3>
          <div className={style.tasks__block}>
            <p className={style.tasks__header}>Разработать телеграм-бота</p>
            <p className={style.tasks__text}>Разработка чат-бота для улучшения и автоматизации поиска работы для работников перспективных профессий</p>
          </div>
        </div>
        <div className={style.tasks__item}>
          <h3 className={style.tasks__subtitle}>2</h3>
          <div className={style.tasks__block}>
            <p className={style.tasks__header}>Работа с API</p>
            <p className={style.tasks__text}>Разработка чат-бота для улучшения и автоматизации поиска работы для работников перспективных профессий</p>
          </div>
        </div>
        <div className={style.tasks__item}>
          <h3 className={style.tasks__subtitle}>3</h3>
          <div className={style.tasks__block}>
            <p className={style.tasks__header}>Алгоритмизация</p>
            <p className={style.tasks__text}>Разработка чат-бота, чтобы отдых в Москве стал комфортнее, проще и доступнее</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
