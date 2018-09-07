import React, {
	Component
} from 'react'

import style from './style.scss'

const Percent = (props) => {
	let color
	if (props.num <= 20) {
		color = 'yellow'
	} else if (50 > props.num && props.num > 20) {
		color = 'red'
	} else {
		color = 'purple'
	}
	return (
		<div className={style.wrapper}>
		   	<div className={style.num}>{props.num}%</div>
		   	<div className={style.title}>标题</div>
			<div className={style.percent} style={{background:color,width:`${props.num}%`}}></div>
	     </div>
	)
}

export default Percent