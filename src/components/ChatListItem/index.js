import React, {
  Component
} from 'react'

import classNames from 'classnames';


import style from './style.scss'

const ChatListItem = () =>  {

	return (
		<div className={style.item}>
			<span className={style.avat}></span>
			<span>尬聊</span>
			<span>下午11:01</span>
		</div>
		)
}

export default ChatListItem