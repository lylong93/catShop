import React, {
	Component
} from 'react'

import classNames from 'classnames';

import {
	withRouter
} from 'react-router-dom';

import AccessAlarmIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

import style from './style.scss'

const back = (props) => {
	props.history.goBack()
}
const Header = (props) => {

	return (
		<div className={style.wrapper}>
			<Button className={style.icon} onClick={back.bind(this,props)}>
				<AccessAlarmIcon/>
			</Button>
			<div>ok</div>
			<div className={style.icon}></div>
		</div>
	)
}

export default withRouter(Header)