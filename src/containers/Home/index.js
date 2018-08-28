import React, {
  Component
} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import socket from 'socket.io-client';

import {
  apiUserLogin,
  apiUserRegister,
  apiUserTest
} from '@/api'

import style from './style/index.scss'
class Home extends Component {

  state = {
    name: '',
    password: '',
    token: '',
    msg: ''
  };

  handleClick = async () => {
    const {
      name,
      password
    } = this.state
    if (!name || !password) {
      console.log('信息不全')
      return
    }
    const data = await apiUserRegister({
      name,
      password
    })
    if (data.status === 200) {
      console.log(data.data)
      // this.setState({
      // 	'token':data.data
      // })
    } else {
      console.log('注册失败')
    }
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  sendClick = () => {
    console.log(this.state.msg)

  };
  componentDidMount() {};

  render() {
    return (
      <div className={style.wrapper}>
        <h1>{this.state.token? this.state.token:'无'}</h1>
        <h1>{this.state.token? this.state.token:'无'}</h1>
         <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
         <TextField
          id="name"
          label="PassWord"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <Button 
        variant="contained" 
        color="primary" 
        onClick={this.handleClick}>
     		注册
    		</Button>
    		 <TextField
          id="name"
          label="PassWord"
          value={this.state.msg}
          onChange={this.handleChange('msg')}
          margin="normal"
        />
        <Button 
        variant="contained" 
        color="primary" 
        onClick={this.sendClick}>
     		发送
    		</Button>
      </div>
    )
  }
}

export default Home