import React, {
	Component
} from 'react'

import style from './style.scss'

const Card = (props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.tiem}>time</div>
			<div className={style}>timeok</div>
		</div>
	)
}

export default Card