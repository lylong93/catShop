import React, {
  Component
} from 'react'

import Input from '@/components/Input';
import Message from '@/components/Message';
import Header from '@/components/Header';

import {
  ioSendMsg,
  ioRecMsg
} from '@/socket'

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
    ifrep: false
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
      ifrep: true
    })
    let msg = {
      to: '123',
      user: 'me',
      msg: this.state.value
    }
    ioSendMsg(msg)
    const list = this.refs.list
    console.log(list)
  };

  componentWillReceiveProps() {
    // console.log(this)
  }
  componentWillMount() {
    console.log(this.props.match.params.id)
    ioRecMsg((msg)=> {
      
      let item = {
        value: msg,
        send: false
      }
      let data = this.state.msglist.push(item)
      this.setState({
        msglist: Object.assign(this.state.msglist, data),
        ifrep: true
      })
    })
  };

  render() {
    return (
      <div className={style.chat}>
          <Header title='lyl'/>
          <div className={style.list} ref="list">
            { this.state.msglist.map((item,index)=> {
              console.log(item)
               return(<Message msg={item.value} key={index} send={item.send}/>)
              })
            }
          </div> 
          <Input className={style.foot} send={this.send} change={this.change} value={this.state.value}/>
      </div>
    );
  }
}

export default ChatUI