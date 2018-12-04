import React, {
  Component
} from 'react'

import {connect} from 'react-redux'

import Input from '@/components/Input';
import Message from '@/components/Message';
import Header from '@/components/Header';

import {
  ioSendMsg,
  ioRecMsg
} from '@/socket'

import {apiGetMstList} from '@/api'

import style from './style.scss'

class ChatUI extends Component {
  constructor(props) {
    super(props)
    this.ok = this.ok.bind(this)
    this.change = this.change.bind(this)
    this.back = this.back.bind(this)
    this.send = this.send.bind(this)
  }
  state = {
    value: '',
    msglist: [],
    chatName:'',
  }
  ok() {
    this.props.change('chat')
  };
  change(event) {
    this.setState({
      value: event.target.value,
      msglist: Object.assign([], this.state.msglist)
    })

  }
  back() {
    this.props.history.goBack()
  };
  send() {
    let item = {
      value: this.state.value,
      send: true
    }
    let data = this.state.msglist.push(item)
    this.setState({
      msglist: Object.assign(this.state.msglist, data),
      value: '',
    })
    let msg = {
      from:this.props.name,
      to: this.state.chatName,
      msg: this.state.value
    }
    ioSendMsg(msg)

    // 滑动
    const list = this.refs.list
    console.log(list)
  };

  componentWillReceiveProps() {
    // console.log(this)
  }
  componentWillMount = async () =>{

    const id = this.props.match.params.id
  //  console.log('ok')
    const data = await apiGetMstList({id});

    if(data.data.state === 0) {
      console.log(data)
      const {username} = data.data.data.query
      const list = data.data.data.list
      this.setState({
        chatName:username,
        msglist:list
      })
    }


   
    // ioRecMsg((msg)=> {
    //   let item = {
    //     value: msg,
    //     send: false
    //   }
    //   let data = this.state.msglist.push(item)
    //   this.setState({
    //     msglist: Object.assign(this.state.msglist, data),
    //     ifrep: true
    //   })
    // })
  };

  render() {
    return (
      <div className={style.chat}>
          <Header title={this.state.chatName}/>
          <div className={style.list} ref="list">
            { this.state.msglist.map((item,index)=> {
               return(<Message msg={item.msg} key={index} send={item.send}/>)
              })
            }
          </div> 
          <Input className={style.foot} send={this.send} change={this.change} value={this.state.value}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {user} = state
  return {
    name: user.name,
  }
}
export default connect(
  mapStateToProps,
)(ChatUI)