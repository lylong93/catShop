import React, {
	Component
} from 'react'

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
		const read = new FileReader()
		const f = this.refs.file.files[0]
		read.readAsDataURL(f)
		read.onprogress = function(e) {
			// console.log(e.loaded)
			// console.log(e.total)
		};
		var that = this

		read.onload = function(e) {
			console.log(this.result)
			that.setState({
				src: this.result
			})
			var canvas, ctx, img64;
			canvas = document.createElement('canvas');
			canvas.width = 100;
			canvas.height = 100;
			ctx = canvas.getContext("2d");
			const img = that.refs.img

			ctx.drawImage(img, 0, 0, 100, 100);

			// img64 = canvas.toDataURL();
			// console.log(canvas)
			// console.log(img64)

			setTimeout(() => {
				img64 = canvas.toDataURL();
				console.log(img64)
				// that.setState({
				// 	src: img64
				// })
			}, 9000)

		};
	}
	render() {
		return (
			<div className={style.wrapper}>
				<input className={style.file} type="file"  ref="file" onChange={this.changepic}/>
				<img className={style.img} ref="img"  src={this.state.src}/>
			</div>
		);
	}

}
export default Upload