import React, { Component } from 'react'

class AddTest extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div>
        <h1 onClick={this.props.onClick}>test</h1>
        <div>{this.props.num}</div>
      </div>
    );
  }
}

export default AddTest