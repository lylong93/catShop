import React, {
  Component
} from 'react'

import classNames from 'classnames';

import Input from '@/components/Input';
import ChatListItem from '@/components/ChatListItem';
import Search from '@/components/Search';
import Side from '@/containers/Side';

import {
  apiGetMstList
} from '@/api'

import style from './style.scss'

class ChatList extends Component {
  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
    this.closeSide = this.closeSide.bind(this)
  };
  state = {
    value: '',
    list: [{
      title: '尬聊尬聊尬聊尬聊尬聊尬聊尬聊',
      tip: false,
      id: 1
    }],
    user:[],
    ifShowSide:false
  };

  gochat(item) {
    let id = item.id
    let title = item.title
    this.props.history.push({
      pathname: `/cc/${id}`,
    })
  };
  show() {
    this.setState({
      ifShowSide:true
    })

  };
  closeSide(e) {
     e.preventDefault();
    this.setState({
      ifShowSide:false
    })
  };
  select(e) {
    e.stopPropagation()
    alert('this')
    // this.props.history.push({
    //   pathname: `/cc/${id}`,
    // })
  }
  componentWillMount = async () => {
    const data = await apiGetMstList({
      to:1
    })

    if(data.data.state=== 0) {
      console.log(data)
      this.setState({
        user:data.data.list
      })
    }
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
        {this.state.ifShowSide&&
          <Side data={this.state.user} select={this.select} close={this.closeSide} />          
        }
      </div>
    );
  }
}

export default ChatList