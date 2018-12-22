import React, {
  Component, useRef
} from 'react'
import {
  connect
} from 'react-redux'

import TextField from '@material-ui/core/TextField'
import FormItme from '@/components/FormItme'
import Food from '@/containers/Food'

import Header from '@/components/Header'
import Upload from '@/components/Upload'

import style from './style.scss'

import {apiUserUpToken,apiUpAvatar} from '@/api'

class Set extends Component {
  constructor(props) {
    super(props)
    this.say = this.say.bind(this)
  }
  state = {
  
  }

  async componentWillMount() {
    console.log(this.props)
    let query = await apiUserUpToken()
    let {uploadToken} = query.data
    
    this.setState({
      uploadToken
    })
  }
  componentWillReceiveProps() {
    console.log(this.props)
  }
  handleChange = name => event => {
    console.log(event.target.value)
    this.setState({
      [name]: event.target.value
    });
  }
  say(res) {
   
    let img = ` http://pijsd28dq.bkt.clouddn.com/${res.key}`

    console.log(img)
    // apiUpAvatar(res)


  }

  render() {
    return (
      <div className={style.wrapper}>
        <Header title='设置'/>
        <div className={style.head}>
          <Upload token={this.state.uploadToken}  callback={this.say}/>
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

const mapStateToProps = (state, ownProps) => {
  const {user} = state
   return {
     id: state,
   }
 }

export default connect(
  mapStateToProps,
)(Set)

// export default Set