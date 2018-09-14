import React, {
	Component
} from 'react'

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import Upload from '@/components/Upload'

import FormItme from '@/components/FormItme'

import style from './style.scss'

const Shade = (props) => {
	return (
		<div className={style.wrapper}>
			<Card className={style.card}>
				<Upload/>
				<FormItme title='价格'/>
				<FormItme title='备注'/>
				<div className={style.foot}>
					<Button size="small" color="primary" onClick={props.sbumit}>
		         	 确定
			        </Button>
			        <Button size="small" color="primary" onClick={props.cancel}>
			         取消
			        </Button>
				</div>
			</Card>
		</div>
	)
}

export default Shade