import React, {
  Component
} from 'react'

import Input from '@/components/Input';
import Message from '@/components/Message';
import Header from '@/components/Header';

import {sendMsg} from '@/socket'

import style from './style.scss'
import classNames from 'classnames';

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
      value: this.state.value
    }
    let data = this.state.msglist.push(item)
    this.setState({
      msglist: Object.assign(this.state.msglist, data),
      value: '',
      ifrep: true
    })
    let mm = {
      to:'123',
      user:'me',
      msg:'nihao '
    }
    sendMsg(mm)
  };

  componentWillReceiveProps() {}
  componentWillMount() {};
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state)
  //   console.log(nextState)
  //   // if (nextState.ifrep === this.state.ifrep) {
  //   //   console.log('ok')
  //   return false
  //   // }
  //   // return true
  // };
  render() {
    return (
      <div className={style.chat}>
          <Header/>
          <div className={style.list}>
            { this.state.msglist.map((item,index)=> {
               // console.log(item)
               return(<Message msg={item.value} key={index}/>)
              })
            }
          </div> 
          <Input className={style.foot} send={this.send} change={this.change} value={this.state.value}/>
      </div>
    );
  }
}

export default ChatUI