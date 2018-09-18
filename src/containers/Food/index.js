import React, {
	Component
} from 'react'

import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Shade from '@/containers/Shade'
import FoodItme from '@/components/FoodItme'

import style from './style.scss'

class Food extends Component {
	constructor(props) {
		super(props)
		this.add = this.add.bind(this)
		this.cancel = this.cancel.bind(this)
	};
	state = {
		show: false,
		foods: [1, 2, 7, 3, 5]
	}
	add() {
		this.setState({
			show: true
		})
	}
	cancel() {
		this.setState({
			show: false
		})
	}
	sbumit() {

	}
	render() {
		return (
			<div className={style.wrapper} onClick={this.props.onClick}>
				<div className={style.list}>
					{
						this.state.foods.map(()=> {
							return (<FoodItme />)
						})
					}
				</div>
				<div className={style.foot}>
					<Button variant="fab" color="primary" className={style.btn} onClick={this.add}>
					    <AddIcon />
					</Button>
				</div>
				{this.state.show&&<Shade  sbumit={this.sbumit} cancel={this.cancel}/>}
			</div>
		)
	}
}

export default Food