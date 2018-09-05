import React, {
  Component
} from 'react'

import classNames from 'classnames';

import Input from '@/components/Input';
import Message from '@/components/Message';

import style from './style.scss'

let id = 1
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
    msglist: []
  }
  ok() {
    this.props.change('chat')
  };
  change(event) {
    this.setState({
      value: event.target.value
    })
    // console.log(this.state.value)
  }
  back() {
    this.props.history.goBack()
  };

  send() {
    // console.log(id)
    // console.log(this.state.msglist)
    let item = {
      value: this.state.value
    }
    let data = this.state.msglist.push(item)
    this.setState({
      msglist: Object.assign(this.state.msglist, data),
      value: ''
    })
  };

  componentWillReceiveProps() {}
  componentWillMount() {};
  // shouldComponentUpdate(nextProps, nextState) {
  //   // return false
  //   if (nextState.msglist == this.state.msglist) {
  //     return false
  //   }
  //   return true
  // };
  render() {
    return (
      <div className={style.chat}>
          <div className={style.head} onClick={this.back}>返回</div>
          <div className={style.list}>
            { this.state.msglist.map((index)=> {
              console.log(index)
               return(<Message msg={index.value} key={index.value}/>)
              })
            }
          </div> 
          <Input className={style.foot} send={this.send} change={this.change} value={this.state.value}/>
      </div>
    );
  }
}

export default ChatUI