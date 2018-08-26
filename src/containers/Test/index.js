import {connect} from 'react-redux'
import {login,ttt} from '@/store/actions/user'

import AddTest from '@/components/AddTest'

const mapStateToProps = (state, ownProps) => {
	// console.log(state)
  return {
  	num:'1'
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {dispatch(ttt())}
  }
}
const Test = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTest)

export default Test