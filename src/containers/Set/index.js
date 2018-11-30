import React, {
  Component
} from 'react'
import TextField from '@material-ui/core/TextField'
import FormItme from '@/components/FormItme'
import Food from '@/containers/Food'

import Header from '@/components/Header'
import Upload from '@/components/Upload'

import style from './style.scss'
import { apiGetUpToken , apiUpAvatar} from '@/api'

class Set extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    this.token = this.token.bind(this)
  }
  state = {
    age: 0,
    value: '',
    uploadToken:'',
    imgname:''
  }
  handleChange = name => event => {
    console.log(event.target.value)
    this.setState({
      [name]: event.target.value
    });
  }
  async save(data) {

    let url = `http://pijsd28dq.bkt.clouddn.com/${data.key}`
    let updata = {
      shopname:'lyl',
      img:url
    }
    let a =await apiUpAvatar(updata)
    console.log(a)
  }

  async token() {
    let data = await apiGetUpToken()
    let {uploadToken} = data.data
    this.setState({
      uploadToken,
      imgname:'shop/shopname'
    });
  }
  componentWillMount() {
    this.token()
  }
  render() {
    return (
      <div className={style.wrapper}>
        <Header title='设置'/>
        <div className={style.head}>
          <Upload token={this.state.uploadToken} name={this.state.imgname}   callback={this.save}/>
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