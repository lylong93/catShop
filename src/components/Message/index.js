import React, {
	Component
} from 'react'

import style from './style.scss'
const Message = (props) => {

	return (
		<div className={style.MessageWrapper}>
		   <span>{props.msg}</span>
	    </div>

	)
}

export default Message