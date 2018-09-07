import React, {
  Component
} from 'react'
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Header from '@/components/Header'

import classNames from 'classnames';
import style from './style.scss'

import { apiUserRegister } from '@/api'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      open: true,
      vertical: 'top',
      horizontal: 'center',
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  };

  submit() {
    const user = {
      name: this.state.name,
      password: this.state.password
    }
    console.log(user)
    // apiUserRegister(user)
  };

   handleClose = () => {
    this.setState({ open: false });
  };
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
          <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.open}
           onClose={this.handleClose}
          style={{bottom:'100px',width:'50%',margin:'0 auto'}}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default Register