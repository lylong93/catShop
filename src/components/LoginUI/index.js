import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import style from './style.scss'


class LoginUI extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextprops) {
    const {logined} = nextprops
    // if(logined) {
      this.props.history.push('/home')
    // }
  }
  componentWillMount() {
  if(this.props.logined) {
      this.props.history.push('/home')
    }
  };
  render() {
  
    return (
      <div  className={classNames(style.sty)}>
        <h1>login</h1>
        <div>{this.props.logined?'true':'false'}</div> 
        <TextField
          className={style.mid}
          label="Name"
          // value={this.state.name}
          // onChange={this.handleChange('name')}
        />
        <TextField
          className={style.mid}
          label="Password"
          type="password"
        />
        <Button variant="contained" color="primary" onClick={this.props.log}>
            登录
         </Button>
         <Button variant="outlined" className={style.ok}>
            注册
          </Button>
      </div>
    );
  }
}

export default LoginUI