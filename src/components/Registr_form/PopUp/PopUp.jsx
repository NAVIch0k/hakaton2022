import React from 'react'
import s from './PopUp.module.css'
import {ReactComponent as PopUp_icon} from '../../../Common/PopUp_icon/PopUp_icon.svg'
import { clear_message } from '../../../redux/Send_form_reducer'
import { connect } from 'react-redux'

const PopUp = ({ active, set_active, children,...props }) => {
    return (
        <div className={active ? s.modal + " " + s.active : s.modal} onClick={() =>{ set_active(false); props.clear_message()}} >
            <div className={s.modal_content} onClick={e => e.stopPropagation()}>
                <div className={s.close} onClick={() =>{ set_active(false); props.clear_message()}}>
                    <PopUp_icon/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default connect(null,{clear_message})(PopUp)