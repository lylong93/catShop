import React, {
  Component
} from 'react'

import classNames from 'classnames';

import Input from '@/components/Input';
import ChatListItem from '@/components/ChatListItem';
import Search from '@/components/Search';
import Side from '@/containers/Side';

import {
  apiChatUserList
} from '@/api'

import style from './style.scss'

class ChatList extends Component {
  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
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
  show() {
    alert('show')
  };
  componentWillMount = async () => {
    const data = await apiChatUserList()
    console.log(data)
  };
  render() {
    return (
      <div className={style.chatlist}>
        <Search onClick={this.show}/>
        <div>
          { this.state.list.map((item,index)=> {
               return (<ChatListItem key={index} title={item.title} tip={item.tip} onClick={this.gochat.bind(this,item)}/>)
            })     
          }
        </div>
        <Side/>
      </div>
    );
  }
}

export default ChatList