import React from 'react'
import { connect } from 'react-redux'
import { get_name_user, get_birthdate_user, get_email_user, get_phone_user, get_registration_user, get_study_place_user } from '../../redux/Send_form_reducer'


class Form_control extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.check=true
    }

    onChange(e) {
        switch (this.props.input.name) {
            case 'name':
                this.props.get_name_user(e.target.value, this.props.player)
                break;
            case 'age': {
                this.props.get_birthdate_user(e.target.value, this.props.player)
                break;
            }
            case 'email': {
                this.props.get_email_user(e.target.value, this.props.player)
                break;
            }
            case 'phone': {
                this.props.get_phone_user(e.target.value, this.props.player)
                break;
            }
            case 'registration': {
                this.props.get_registration_user(e.target.value, this.props.player)
                break;
            }
            case 'study_place': {
                this.props.get_study_place_user(e.target.value, this.props.player)
                break;
            }
            default:
                break;
        }
    }

    // clear_form = () => {
    //     if (this.props.message == 'Success') {
    //         this.check=false
    //     }
    // }

    render() {
        // this.clear_form()
        if (this.props.message == 'Success') {
            return (
                <input value='' maxLength={this.props.maxLength} className={this.props.className} placeholder={this.props.placeholder} type={this.props.type} onChange={this.onChange} />
                )
            }
            else{
                return (
                <input maxLength={this.props.maxLength} className={this.props.className} placeholder={this.props.placeholder} type={this.props.type} onChange={this.onChange} />
            )
        }
    }
}

let map_state_to_props = (state) => ({
    message: state.form_page.message
})


export default connect(map_state_to_props, { get_name_user, get_birthdate_user, get_email_user, get_phone_user, get_registration_user, get_study_place_user })(Form_control)