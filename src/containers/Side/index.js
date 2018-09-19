import React, {
  Component
} from 'react'

import classNames from 'classnames';

import SideItem from '@/components/SideItem';
import ChatListItem from '@/components/ChatListItem';
import Search from '@/components/Search';

import {
  apiChatUserList
} from '@/api'

import style from './style.scss'

class ChatList extends Component {
  constructor(props) {
    super(props)
  };
  state = {
    list: [{}],
  };
  show() {
    alert('one')
  }
  ok(e) {
    e.stopPropagation()
    alert('ok')
  }
  componentWillMount = async () => {

  };
  render() {
    return (
      <div className={style.wrapper} onClick={this.show}>
        <div className={style.side} onClick={this.ok}>
          <div>
            { this.state.list.map((item,index)=> {
                 return (<SideItem key={index} />)
              })     
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ChatList