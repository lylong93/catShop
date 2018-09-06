import React, {
	Component
} from 'react'

import style from './style.scss'

const Percent = (props) => {
	let color
	if (props.num <= 20) {
		color = 'yellow'
	}
	if (50 > props.num > 20) {
		color = 'red'
	} else {
		color = 'purple'
	}
	return (
		<div className={style.wrapper}>
		   <div>{props.num}%</div>
			<div className={style.percent} style={{background:color,width:`${props.num}%`}}></div>
	    </div>

	)
}

export default Percent