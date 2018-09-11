import React, {
	Component
} from 'react'

import style from './style.scss'


const Message = (props) => {
	return (
		<div className={style.MessageWrapper}>
		{!props.send
			?<div className={style.left}>
				<span className={style.avat}></span>
		  		<span className={style.msgleft}>{props.msg}</span>
			 </div>
		    :<div className={style.right}>
		   		<span className={style.msgright}>{props.msg}</span>
				<span className={style.avat}></span>
			 </div>
		}   
	    </div>
	)
}

export default Message