import React, {
	Component
} from 'react'

import classNames from 'classnames/bind';

import style from './style.scss'

let cx = classNames.bind(style);

var className = cx('title', 'tip');

const ChatListItem = (props) => {
	return (
		<div className={style.item} onClick={props.onClick}>
			<span className={style.avat}></span>
			<div>
				<div className={style.title}>{props.title}</div>
				{	props.tip
					?<div className={className}>&bull;有未读消息</div>
					:<div className={className}></div>
				}
			</div>
			<span className={style.time}>下午11:01</span>
		</div>
	)
}

export default ChatListItem