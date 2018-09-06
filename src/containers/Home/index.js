import React, {
  Component
} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Percent from '@/components/Percent'
import Charts from '@/components/Charts'
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
        <div className={style.head}></div>
        <Charts/>
        <div className={style.footer}>
          <Percent num={80}/>
          <Percent num={30}/>
        </div>
      </div>
    )
  }
}

export default Home