import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import FileInput from '../../Common/File_control'
import Forms_control from '../../Common/Forms_control/Forms_controls'
import s from './Registr_form.module.css'
import { ReactComponent as Plus } from '../../Common/Button_icon/button_icon.svg'
import { connect } from 'react-redux'
import PopUp from './PopUp/PopUp'
import { useState } from 'react'

export const change_active = (id, name) => {
  let label = document.querySelector(`[for="${id}"]`)
  label.classList.add(s.active)
  label.childNodes[0].textContent = name
}

const Registr = (props) => {
  let a = ['Первый', 'Второй', 'Третий', 'Четвёртый']

  if (props.message == 'Success') {
    const className = s.active
    const els = document.getElementsByClassName(className)
    while (els.length > 0) {
      els[0].childNodes[0].textContent = 'Прикрепить файл'
      els[0].classList.remove(className)
    }
  }

  let [active_pop_up, set_active_pop_up] = useState(false)

  return (
    <div className={s.form_cont}>
      <form className={s.form_user}>
        <h3 className={s.num_user}>{a[props.player]} участник</h3>
        <div className={s.input_text}>
          <Field className={s.grid_fix} player={props.player} name="name" placeholder="ФИО" type={'text'} component={Forms_control} />
          <Field maxLength={3} player={props.player} name="age" placeholder="Возраст" type={'text'} component={Forms_control} />
          <Field player={props.player} name="phone" placeholder="Телефон" type={'text'} component={Forms_control} />
          <Field className={s.grid_fix} player={props.player} name="email" placeholder="Электронная почта" type={'email'} component={Forms_control} />
          <Field className={s.grid_fix} player={props.player} name="registration" placeholder="Место регистрации участника" type={'text'} component={Forms_control} />
          <Field className={s.grid_fix} player={props.player} name="study_place" placeholder="Учебное заведение" type={'text'} component={Forms_control} />
        </div>
        <div className={s.load_file}>
          <div className={s.load_sample}>
            <p>Согласие на обработку персональных данных</p>
            <a href='https://xn--2022-43da3ezai3b3a.xn--p1ai/api/static/documents/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_18_%D0%BB%D0%B5%D1%82_%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81%D0%B0%D0%BD%D1%82_%D0%B8_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82.docx' className={s.show_message} download>
              Скачать шаблон
            </a>
          </div>
          <Field player={props.player} id={'pd_file' + props.player} name="pd_file" component={FileInput} />
          <label htmlFor={'pd_file' + props.player} className={s.lable_file}>
            <p>Прикрепить файл</p>
            <Plus className={s.button_img} />
          </label>
        </div>
        <div className={s.load_file}>
          <div className={s.load_sample}>
            <p>Согласие родителей (если участнику меньше 18 лет)</p>
            <a href='https://xn--2022-43da3ezai3b3a.xn--p1ai/api/static/documents/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D1%80%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B8%CC%86_%D0%BD%D0%B0_%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5_%D0%BD%D0%B5%D1%81%D0%BE%D0%B2%D0%B5%D1%80_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81%D0%B0%D0%BD%D1%82%D0%B0_%D0%B8_%D0%B5%D0%B3%D0%BE.docx' className={s.show_message} download>
              Скачать шаблон
            </a>
          </div>
          <label htmlFor={'parent_file' + props.player} className={s.lable_file}>
            <p>Прикрепить файл</p>
            <Plus className={s.button_img} />
          </label>
          <Field player={props.player} id={'parent_file' + props.player} name="parent_file" component={FileInput} />
        </div>
        <div className={s.load_file}>
          <div className={s.load_sample}>
            <p>Согласие на публикацию фото и видео</p>
            <a href='https://xn--2022-43da3ezai3b3a.xn--p1ai/api/static/documents/Согласия_фото.zip' className={s.show_message} download>
              Скачать шаблон
            </a>
          </div>
          <label htmlFor={'photo_file' + props.player} className={s.lable_file}>
            <p>Прикрепить файл</p>
            <Plus className={s.button_img} />
          </label>
          <Field player={props.player} id={'photo_file' + props.player} name="photo_file" component={FileInput} />
        </div>
      </form>
      <PopUp active={active_pop_up} set_active={set_active_pop_up}>
        <p>Шаблоны скоро появятся на сайте. Сейчас их можно получить обратившись к организаторам</p>
      </PopUp>
    </div>
  )
}

const Registr_form = reduxForm({ form: 'registr' })(Registr)
let map_state_to_props = (state) => ({
  message: state.form_page.message,
})
export default connect(map_state_to_props, {})(Registr_form)
