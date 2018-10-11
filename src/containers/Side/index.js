import React, {
  Component
} from 'react'

import {
  withRouter
} from 'react-router-dom';

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
  select (item) {
    console.log( this.props)
    this.props.history.push({
      pathname: `/cc/${item._id}`,
      query:'ooo'
    })
  };
  render() {
    return (
      <div className={style.wrapper} onClick={this.props.close}>
        <div className={style.side}>
          <div>
            { this.props.data.map((item,index)=> {
                 return (<SideItem key={index} data={item} onClick={this.select.bind(this,item)}/>)
              })     
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatList)