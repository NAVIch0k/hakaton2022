import React from 'react'

// STYLES
import style from './schedule.module.scss'

const Schedule = () => {
  return (
    <div className={style.schedule}>
      <h2 className={style.schedule__title}>Расписание проведения хакатона</h2>
      <div className={style.schedule__list}>
        <div className={style.schedule__item}>
          <small className={style.schedule__date}>1 апреля - 4 апреля</small>
          <p className={style.schedule__text}>Формирование команд</p>
        </div>
        <div className={style.schedule__item}>
          <small className={style.schedule__date}>4 апреля - 12 апреля</small>
          <p className={style.schedule__text}>Регистрация</p>
        </div>
        <div className={style.schedule__item}>
          <small className={style.schedule__date}>14 апреля</small>
          <p className={style.schedule__text}>Выполнение заданий</p>
        </div>
        <div className={style.schedule__item}>
          <small className={style.schedule__date}>15 апреля</small>
          <p className={style.schedule__text}>Презентация работ и выбор победителей</p>
        </div>
      </div>
      <div className={style.chart}>
        <h2 className={style.chart__title}>График демонастрации презентаций</h2>
        <div className={style.chart__item}>
          <p className={style.chart__text}>Колледж Связи №54 им. П. М. Вострухина</p>
          <a href="https://хакатон2022.рф/api/static/documents/График_презентаций_работ.docx" className={style.chart__link}>Скачать файл</a>
        </div>
        <div className={style.chart__item}>
          <p className={style.chart__text}>Колледж автоматизации и информационных технологий №20</p>
          <a href="https://хакатон2022.рф/api/static/documents/График_защит_каит.xlsx" className={style.chart__link}>Скачать файл</a>
        </div>
        <div className={style.chart__item}>
          <p className={style.chart__text}>Московский государственный колледж электромеханики и информационных технологий</p>
          <a href="https://хакатон2022.рф/api/static/documents/График_мгкаит.doc" className={style.chart__link}>Скачать файл</a>
        </div>
      </div>
    </div>
  )
}

export default Schedule
