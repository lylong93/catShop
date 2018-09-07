import React, {
	Component
} from 'react'

import classNames from 'classnames';


import style from './style.scss'

const Avat = (props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.avat}></div>
			<div className={style.name}>ok</div>
			<div className={style.name}>&hearts;&hearts;&hearts;&hearts;&hearts;</div>
		</div>
	)
}

export default Avat