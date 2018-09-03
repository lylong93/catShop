import React, {
  Component
} from 'react'

import classNames from 'classnames';

import Input from '@/components/Input';

import style from './style.scss'

class ChatList extends Component {
  constructor(props) {
    super(props)

  }
  state = {
    value: ''
  }

  render() {
    return (
      <div className={style.chatlist}>
          <div>ok</div>
      </div>
    );
  }
}

export default ChatList