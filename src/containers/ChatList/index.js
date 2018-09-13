import React, {
  Component
} from 'react'

import classNames from 'classnames';

import Input from '@/components/Input';
import ChatListItem from '@/components/ChatListItem';
import Search from '@/components/Search';

import {apiChatUserList} from '@/api'

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
    }],
  };

  gochat(item) {
    let id = item.id
    let title = item.title
    this.props.history.push({
      pathname: `/cc/${id}`,
    })
  };
  componentWillMount = async ()=> {
    const data = await  apiChatUserList()
    console.log(data)
  };
  render() {
    return (
      <div className={style.chatlist}>
        <Search/>
        <div>
          { this.state.list.map((item,index)=> {
               return (<ChatListItem key={index} title={item.title} tip={item.tip} onClick={this.gochat.bind(this,item)}/>)
            })     
          }
        </div>
      </div>
    );
  }
}

export default ChatList