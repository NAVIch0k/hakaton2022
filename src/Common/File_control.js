import React from 'react'
import { connect } from 'react-redux'
import { change_active_escort } from '../components/Escort_file/Escort_file'
import { change_active } from '../components/Registr_form/Registr_form'
import { get_pd_file, get_parent_file, get_escort_file, get_photo_file } from '../redux/Send_form_reducer'

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    if (this.props.input.name == 'pd_file') {
      this.props.get_pd_file(e.target.files[0], this.props.player)
      change_active(e.target.id, e.target.files[0].name)
    } else if (this.props.input.name == 'parent_file') {
      this.props.get_parent_file(e.target.files[0], this.props.player)
      change_active(e.target.id, e.target.files[0].name)
    }
    else if (this.props.input.name == 'photo_file') {
      this.props.get_photo_file(e.target.files[0], this.props.player)
      change_active(e.target.id, e.target.files[0].name)
    }
    else {
      this.props.get_escort_file(e.target.files[0], this.props.player)
      change_active_escort(e.target.id, e.target.files[0].name)
    }
  }

  render() {
    return <input id={this.props.id} type="file" onChange={this.onChange} />
  }
}

export default connect(null, { get_pd_file, get_parent_file, get_photo_file, get_escort_file })(FileInput)
