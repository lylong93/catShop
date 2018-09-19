import React, {
	Component
} from 'react'

import classNames from 'classnames';

import {
	withRouter
} from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import Person from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';

import style from './style.scss'

const Search = (props) => {
	return (
		<div className={style.wrapper}>
			<Button className={style.icon} onClick={props.onClick}>
				<Person/>
			</Button>
			<div className={style.inputWrapper}>
				<div className={style.serchWrapper}>
					<SearchIcon/>
					<input type="text" vlaue="" className={style.input}/>
				</div>
			</div>
			<Button className={style.icon}>
				搜索
			</Button>
		</div>
	)
}

export default withRouter(Search)