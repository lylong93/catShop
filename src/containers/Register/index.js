import React, {
  Component
} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import Header from '@/components/Header'
import Tip from '@/components/Tip'

import classNames from 'classnames';
import style from './style.scss'

import { apiUserRegister } from '@/api'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      errShow:false,
      errMsg:''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.close = this.close.bind(this)

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  };

  submit() {
     console.log('dd')
    if(!this.state.name || !this.state.password) {
      console.log('no msg')
      return
    }
    const user = {
      shopname: this.state.name,
      password: this.state.password
    }
    apiUserRegister(user)
  };
  close(e) {
    console.log(e) // TouchEvent  MouseEvent
    this.setState({
      errShow:false
    })
  }
  render() {
    return (
      <div className={classNames(style.wrapper)}>
        <Header title='regjister'/>
        <TextField
          className={style.mid}
          label="Name"   
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        <TextField
          className={style.mid}
          label="Password"
          type='password'
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
        <Button  className={style.mid} variant="contained" color="primary" onClick={this.submit}>
            确定
         </Button>
        <Tip msg={this.state.errMsg} show={this.state.errShow} onClose={this.close}/>
      </div>
    );
  }
}

export default Register