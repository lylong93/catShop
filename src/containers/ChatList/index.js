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
    list: [{
      title: '尬聊尬聊尬聊尬聊尬聊尬聊尬聊',
      tip: false,
      id: 1
    }, {
      title: '尬聊',
      tip: true,
      id: 2
    }],
  };

  gochat(item) {
    let id = item.id
    let title = item.title
    this.props.history.push({
      pathname: `/cc/${id}`,
    })
  };
  render() {
    return (
      <div className={style.chatlist}>
        { this.state.list.map((item,index)=> {
             return (<ChatListItem key={index} title={item.title} tip={item.tip} onClick={this.gochat.bind(this,item)}/>)
          })     
        }
      </div>
    );
  }
}

export default ChatList