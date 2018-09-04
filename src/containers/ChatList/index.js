import React, {
  Component
} from 'react'

import classNames from 'classnames';

import Input from '@/components/Input';
import ChatListItem from '@/components/ChatListItem';

import style from './style.scss'

class ChatList extends Component {
  constructor(props) {
    super(props)
  };
  state = {
    value: '',
    list:[1,2,3],
  };

  gochat(item) {
    console.log(item)

  };
  render() {
    return (
      <div className={style.chatlist}>
        { this.state.list.map((item,index)=> {
             return (<ChatListItem key={index} onClick={this.gochat.bind(this,item)}/>)
          })     
        }
      </div>
    );
  }
}

export default ChatList