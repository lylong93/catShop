import React, {
	Component
} from 'react'

import classNames from 'classnames/bind';

import style from './style.scss'


const SideItem = (props) => {
	return (
		<div className={style.wrapper} onClick={props.onClick}>
			<span className={style.avat}></span>
			<div className={style.name}>woshidhui</div>
		</div>
	)
}

export default SideItem