import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { get_file, get_count_user } from '../../redux/Send_form_reducer'
import Escort_file from '../Escort_file/Escort_file'
import s from './Registr_cont.module.css'
import Registr_form from './Registr_form'
import PopUp from './PopUp/PopUp'

const Escort_file_form = reduxForm({ form: 'escort_file_form' })(Escort_file)

class Registr_cont extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.myref = React.createRef()
  //   this.array_form = []
  //   this.active_name = 'but1'
  //   this.state = {
  //     modal_active: false,
  //   }
  //   this.message_fix = true
  // }

  // set_array_form = (count) => {
  //   this.array_form = []
  //   for (let i = 0; i < count; i++) {
  //     this.array_form.push(<Registr_form key={i} player={i} />)
  //   }
  // }

  // set_count_users = (e) => {
  //   this.props.get_count_user(Number(e.target.outerText))
  //   e.preventDefault()
  //   this.active_name = e.target.name
  // }

  // message = () => {
  //   if (this.props.message == 'Bad email input') {
  //     return <p>Некорректный Email</p>
  //   } else if (this.props.message == 'Не все поля заполнены') {
  //     return <p>Не все поля заполнены</p>
  //   } else if (this.props.message == 'Success') {
  //     return (
  //       <>
  //         <p className={s.header_success}>Заявка на регистрацию принята!</p>
  //         <p className={s.success}>Приглашение скоро придет вам на почту</p>
  //       </>
  //     )
  //   } else if (this.props.message.includes('Duplicate entry')) {
  //     let er_mail = this.props.message.split(' ', 3)
  //     er_mail = er_mail[2].replace(/['"]+/g, '')
  //     return `Email - ${er_mail} уже зарегистрирована`
  //   } 
  //   else if(this.props.message == 'Incorrect emails'){
  //     return 'У каждого участника должна быть уникальная почта'
  //   }
  //   else if(this.props.message == 'Ожидание...'){
  //     return 'Ожидание...'
  //   }
  //   else {
  //     return 'что-то пошло не так'
  //   }
  // }

  render() {
    // this.set_array_form(this.props.count)
    return (
      <div className={s.registration}>
        <h1 className={s.registration__text}>Регистрация на хакатон завершена.</h1>
      </div>
      // <div id="tttt" className={s.registr}>
      //   <h1 id="reg" className={s.registr_header}>
      //     Регистрация участников
      //   </h1>
      //   <div className={s.count_user}>
      //     <h1>Количество участников:</h1>
      //     <button className={this.active_name == 'but1' ? s.active : ''} name="but1" ref={this.myref} onClick={(ref) => this.set_count_users(ref)}>
      //       2
      //     </button>
      //     <button className={this.active_name == 'but2' ? s.active : ''} name="but2" ref={this.myref} onClick={(ref) => this.set_count_users(ref)}>
      //       3
      //     </button>
      //     <button className={this.active_name == 'but3' ? s.active : ''} name="but3" ref={this.myref} onClick={(ref) => this.set_count_users(ref)}>
      //       4
      //     </button>
      //   </div>
      //   <div className={s.form}>{this.array_form}</div>
      //   <div className={s.escort_file}>
      //     <p>Приказ о сопровождении участников</p>
      //     <Escort_file_form />
      //   </div>
      //   <button
      //     className={s.registr_but}
      //     onClick={() => {
      //       this.props.get_file(this.props.form_page)
      //       this.setState({ modal_active: true })
      //     }}
      //   >
      //     Зарегистрироваться
      //   </button>
      //   <p className={s.registr_range}>Регистрация доступна 4-12 апреля</p>
      //   <PopUp active={this.state.modal_active} set_active={(e) => this.setState({ modal_active: e })}>
      //     <div className={s.PopUp_message}>{this.message()}</div>
      //   </PopUp>
      // </div>
    )
  }
}

let map_state_to_props = (state) => ({
  // count: state.form_page.count_users,
  // form_page: state.form_page,
  // message: state.form_page.message,
})

export default connect(map_state_to_props,  /*get_file, get_count_user*/null )(Registr_cont)
