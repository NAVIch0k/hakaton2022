import React from 'react'

// STYLES
import style from './about.module.scss'

const About = () => {
  return (
    <div className={style.about}>
      <h2 id="about" className={style.about__title}>
        О хакатоне
      </h2>
      <div className={style.about__block}>
        <p className={style.about__text}>
          Хакатон — форум для разработчиков, во время которого специалисты из разных областей разработки программного обеспечения сообща решают какую-либо
          проблему на время.
        </p>
        <p className={style.about__text + ' ' + style.about__text_bold}>
          Хакатон “Поколение IT” будет проводиться на трех площадках ведущих колледжей города Москвы 14-15 апреля 2022 года.
        </p>
        <div className={style.about__buttons}>
          <a
            className={style.about__button}
            href="https://хакатон2022.рф/api/static/documents/Положение_о_хакатоне_Поколение_IT_13_15_апреля_2022_г.docx"
            download
          >
            Скачать положение
          </a>
          <a className={style.about__button} href="https://хакатон2022.рф/api/static/documents/Регламент_хакатона.docx" download>
            Скачать регламент
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
