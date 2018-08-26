import {connect} from 'react-redux'
import {login} from '@/store/actions/user'

import LoginUI from '@/components/LoginUI'

const mapStateToProps = (state, ownProps) => {
  return {
    logined:state.user.logined
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    log: () => {dispatch(login())}
  }
}
const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUI)

export default Login