import React, {
  Component
} from 'react'

import io from 'socket.io-client';

import Input from '@/components/Input';
import Message from '@/components/Message';
import Header from '@/components/Header';

import style from './style.scss'
import classNames from 'classnames';

const socket = io('http://localhost:8000/', {
  autoConnect: false
});

socket.open();

socket.on('connect', () => {
  console.log('connect')
});
socket.on('disconnect', () => {
  console.log('disconnect')
});
socket.on('error', () => {
  console.log('error')
});

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
      user: 'me',
      msg: 'nihao '
    }
    socket.emit('news', mm);
    socket.on('ttt', (msg) => {
      console.log('ooo')
      console.log(msg)
    });
  };

  componentWillReceiveProps() {}
  componentWillMount() {
    socket.on('getresponse', (msg) => {
      console.log('msg')
      console.log(msg)
    });
  };
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