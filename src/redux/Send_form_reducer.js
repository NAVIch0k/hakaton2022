import { Registration_API } from '../API/API'

const SET_PD_FILE = 'SET_PD_FILE'
const SET_PARENT_FILE = 'SET_PARENT_FILE'
const SET_PHOTO_FILE = 'SET_PHOTO_FILE'
const SET_ESCORT_FILE = 'SET_ESCORT_FILE'

const SET_NAME = 'SET_NAME'
const SET_BIRTHDAY = 'SET_BIRTHDAY'
const SET_EMAIL = 'SET_EMAIL'
const SET_PHONE = 'SET_PHONE'
const SET_REGITRATION = 'SET_REGITRATION'
const SET_STUDY_PLACE = 'SET_STUDY_PLACE'

const SET_COUNT = 'SET_COUNT'

const SET_MESSAGE = 'SET_MESSAGE'

const CLEAR_FORM = 'CLEAR_FORM'

const CLEAR_MESSAGE='CLEAR_MESSAGE'

const initial_state = {
  escort_file: null,
  users: [
    {
      name: '',
      age: '',
      email: '',
      phone: '',
      pd_file: null,
      parent_file: null,
      photo_file:null,
      registration: '',
      study_place: '',
    },
    {
      name: '',
      age: '',
      email: '',
      phone: '',
      pd_file: null,
      parent_file: null,
      photo_file:null,
      registration: '',
      study_place: '',
    },
    {
      name: '',
      age: '',
      email: '',
      phone: '',
      pd_file: null,
      parent_file: null,
      photo_file:null,
      registration: '',
      study_place: '',
    },
    {
      name: '',
      age: '',
      email: '',
      phone: '',
      pd_file: null,
      parent_file: null,
      photo_file:null,
      registration: '',
      study_place: '',
    },
  ],
  count_users: 2,
  message: 'Ожидание...',
}

const Send_form_reducer = (state = JSON.parse(JSON.stringify(initial_state)), action) => {
  switch (action.type) {
    case SET_PD_FILE: {
      const formData = new FormData()
      formData.append('pd_file', action.pd_file, 'практика.xlsx')
      state.users[action.numb].pd_file = action.pd_file
      return { ...state }
    }
    case SET_PARENT_FILE: {
      const formData = new FormData()
      formData.append('parent_file', action.parent_file, 'практика.xlsx')
      state.users[action.numb].parent_file = action.parent_file
      return { ...state }
    }
    case SET_PHOTO_FILE: {
      const formData = new FormData()
      formData.append('photo_file', action.photo_file, 'практика.xlsx')
      state.users[action.numb].photo_file = action.photo_file
      return { ...state }
    }
    case SET_ESCORT_FILE: {
      const formData = new FormData()
      formData.append('escort_file', action.escort_file, 'практика.xlsx')
      return { ...state, escort_file: action.escort_file }
    }
    case SET_NAME: {
      state.users[action.numb].name = action.name
      return { ...state }
    }
    case SET_BIRTHDAY: {
      state.users[action.numb].age = action.age
      return { ...state }
    }
    case SET_EMAIL: {
      state.users[action.numb].email = action.email
      return { ...state }
    }
    case SET_PHONE: {
      state.users[action.numb].phone = action.phone
      return { ...state }
    }
    case SET_MESSAGE: {
      return { ...state, message: action.message }
    }
    case SET_COUNT: {
      return { ...state, count_users: action.count }
    }
    case SET_REGITRATION: {
      state.users[action.numb].registration = action.registration
      return { ...state }
    }
    case SET_STUDY_PLACE: {
      state.users[action.numb].study_place = action.study_place
      return { ...state }
    }
    case CLEAR_FORM: {
      return {...state,...JSON.parse(JSON.stringify(initial_state)),message:state.message}
    }
    case CLEAR_MESSAGE:{
      state.message = action.message
      return { ...state }
    }
    default: {
      return state
    }
  }
}
//file_AC
export const get_pd_file = (pd_file, numb) => ({ type: SET_PD_FILE, pd_file: pd_file, numb: numb })
export const get_parent_file = (parent_file, numb) => ({ type: SET_PARENT_FILE, parent_file: parent_file, numb: numb })
export const get_photo_file = (photo_file, numb) => ({ type: SET_PHOTO_FILE, photo_file: photo_file, numb: numb })
export const get_escort_file = (escort_file, numb) => ({ type: SET_ESCORT_FILE, escort_file: escort_file, numb: numb })
//data_AC
export const get_name_user = (name, numb) => ({ type: SET_NAME, name: name, numb: numb })
export const get_birthdate_user = (age, numb) => ({ type: SET_BIRTHDAY, age: age, numb: numb })
export const get_email_user = (email, numb) => ({ type: SET_EMAIL, email: email, numb: numb })
export const get_phone_user = (phone, numb) => ({ type: SET_PHONE, phone: phone, numb: numb })
export const get_registration_user = (registration, numb) => ({ type: SET_REGITRATION, registration: registration, numb: numb })
export const get_study_place_user = (study_place, numb) => ({ type: SET_STUDY_PLACE, study_place: study_place, numb: numb })
//count_AC
export const get_count_user = (count) => ({ type: SET_COUNT, count: count })
//message_api
const get_message = (message) => ({ type: SET_MESSAGE, message: message })
//clear
const clear_form = () => ({ type: CLEAR_FORM })
//clear_message
export const clear_message = () => ({ type: CLEAR_MESSAGE, message:'Ожидание...' })

export const get_file = (form_page) => (dispatch) => {
  let users = []
  for (let i = 0; i < form_page.count_users; i++) {
    users.push(form_page.users[i])
  }
  let check = true
  users.forEach(el => {
    for (const key in el) {
      if (el[key] == null && key != 'parent_file'||el[key]=='') {
        check = false
      }
    }
  })
  if (form_page.escort_file == null) {
    check = false
  }
  if (check) {
    Registration_API.set_data(form_page.escort_file, users).then(Response => {
      dispatch(get_message(Response.data.message))
      dispatch(clear_form())
    }).catch(err=>{
      console.log(err);
      dispatch(get_message(err.response.data.message))
    })
  }
  else {
    dispatch(get_message("Не все поля заполнены"))
  }

}

export default Send_form_reducer
