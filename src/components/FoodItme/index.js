import React, {
	Component
} from 'react'

import classNames from 'classnames/bind';

import style from './style.scss'

const FoodItme = (props) => {
	return (
		<div className={style.wrapper} >
			<div className={style.img}>food</div>
			<div className={style.price}>20</div>
			<div className={style.remarks}>备注</div>
		</div>
	)
}

export default FoodItme