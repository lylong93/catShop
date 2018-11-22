import React, {
  Component
} from 'react'
import TextField from '@material-ui/core/TextField'
import FormItme from '@/components/FormItme'
import Food from '@/containers/Food'

import Header from '@/components/Header'
import Upload from '@/components/Upload'

import style from './style.scss'

class Set extends Component {
  constructor(props) {
    super(props)
    this.say = this.say.bind(this)
  }
  state = {
    age: 0,
    value: '',
  }
  handleChange = name => event => {
    console.log(event.target.value)
    this.setState({
      [name]: event.target.value
    });
  }
  say() {
    console.log(this)
  }
  render() {
    return (
      <div className={style.wrapper}>
        <Header title='设置'/>
        <div className={style.head}>
          <Upload token='token' callback={this.say}/>
          <FormItme title='名称'/>
          <FormItme title='地址'/>
          <FormItme title='电话'/>
        </div>
        <h3 className={style.title}>list</h3>
        <Food/>
      </div>
    );
  }
}

export default Set