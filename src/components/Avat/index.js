import React, {
	Component
} from 'react'

import classNames from 'classnames';
import style from './style.scss'

const Avat = (props) => {
	const {src,name} = props
	return (
		<div className={style.wrapper}>
			<div className={style.avat}>
				<img src={src} className={style.img}/>
			</div>
			<div className={style.name}>{name}</div>
			<div className={style.name}>&hearts;&hearts;&hearts;&hearts;&hearts;</div>
		</div>
	)
}

export default Avat