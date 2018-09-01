import React, {
  Component
} from 'react'


const Input = (props)=> {
	console.log(props)
	return (
			<div>
				<input type="text" value={props.value}/>
			</div>

		)
}

export default Input