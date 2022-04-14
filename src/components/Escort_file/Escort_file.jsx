import React from 'react'
import { Field } from 'redux-form'
import FileInput from '../../Common/File_control'
import s from './Escort_file.module.css'
import { ReactComponent as Plus } from '../../Common/Button_icon/button_icon.svg'
import { connect } from 'react-redux'


export const change_active_escort=(id,name)=>{
    let label = document.querySelector(`[for="${id}"]`);
    label.classList.add(s.active)
    label.childNodes[0].textContent=name
}

const Escort_file = (props) => {

    if (props.message=='Success') {
        const className = s.active;
        const els = document.getElementsByClassName(className);
        while (els.length > 0){ 
          els[0].childNodes[0].textContent = "Прикрепить файл"
          els[0].classList.remove(className)
        };
    }
    return (
        <form>
            <Field name='escort_file' id='escort_file' component={FileInput} />
            <label htmlFor='escort_file' className={s.lable_file}>
                <p>Прикрепить файл</p>
                <Plus className={s.button_img} />
            </label>
        </form>
    )
}

let map_state_to_props=(state)=>({
    message: state.form_page.message
})

export default connect(map_state_to_props,{})(Escort_file)