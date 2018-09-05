import React, {
	Component
} from 'react'

import style from './style.scss'

const Input = (props) => {
	return (
		<div className={style.inputwrapper}>
			<input type="text" value={props.value} className={style.input} onChange={props.change}/>
 			<span className={style.send} onClick={props.send}>send</span>
		</div>
	)
}

export default Input