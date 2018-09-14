import React, {
	Component
} from 'react'

import TextField from '@material-ui/core/TextField';

import style from './style.scss'

const FormItme = (props) => {
	return (
		<div className={style.wrapper}>
		<span className={style.title}>{props.title}</span>
			<TextField className={style.tiem}>
			</TextField>
		</div>
	)
}

export default FormItme