import React, {
  Component
} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import style from './style.scss'

class LoginUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      errors: {
        name: true,
        password: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.goRegister = this.goRegister.bind(this)
  }
  componentWillReceiveProps(nextprops) {
    const {
      logined
    } = nextprops
    if (logined) {
      this.props.history.push('/home')
    }
  }
  componentWillMount() {
    if (this.props.logined) {
      this.props.history.push('/home')
    }
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  submit() {
    this.setState((prevState) => {
      return {
        errors: { ...prevState.errors,
          name: false
        }
      }
    });
    const user = {
      name: this.state.name,
      password: this.state.password
    }
    this.props.login(user)
  };

  goRegister() {
    this.props.history.push('/register')
  };
  render() {
    return (
      <div  className={classNames(style.sty)}>
        <h1>login</h1>
        <div>{this.props.logined?'true':'false'}</div> 
        <TextField
          className={style.mid}
          label="Name"   
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        <TextField
          className={style.mid}
          label="Password"
          type="password"
           error={this.state.errors.name}
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
        <Button variant="contained" color="primary" onClick={this.submit}>
            登录
         </Button>
         <Button variant="outlined" onClick={this.goRegister}>
            注册
          </Button>
      </div>
    );
  }
}

export default LoginUI