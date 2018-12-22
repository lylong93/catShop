import React, {
	Component
} from 'react'

import * as qiniu from 'qiniu-js'

import style from './style.scss'

class Upload extends React.Component {
	constructor(props) {
		super(props)
		this.changepic = this.changepic.bind(this)
	}
	state = {
		src: ""
	}
	changepic(e) {
		let read = new FileReader()
		let f = this.refs.file.files[0]
		read.readAsDataURL(f)

		let that = this

		read.onload = function(e) {
			// console.log(this.result)
			that.setState({
				src: this.result
			})
			let canvas, ctx, img64;
			canvas = document.createElement('canvas');
			canvas.width = 100;
			canvas.height = 100;
			ctx = canvas.getContext("2d");
			let img = that.refs.img

			ctx.drawImage(img, 0, 0, 100, 100);

			let {token} =that.props

			let observable =  qiniu.upload(f,null,token)

			let observer = {
				  next(res){
				    console.log('res')
				  },
				  error(err){
				    console.log(err)
				  }, 
				  complete(res){
				     // 用hash判断重复
				     that.props.callback(res)
				  }
				}

			let subscription = observable.subscribe(observer)
			

		};
	}
	render() {
		return (
			<div className={style.wrapper}>
				<input className={style.file} type="file"  ref="file" onChange={this.changepic}/>
				{this.state.src
					?<img className={style.img} ref="img"  src={this.state.src}/>
					:<div></div>
				}
				
			</div>
		);
	}

}
export default Upload