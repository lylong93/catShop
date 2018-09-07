import {
  connect
} from 'react-redux'
import {
  logout
} from '@/store/actions/user'

import me from './me'

const mapStateToProps = (state, ownProps) => {
 const {user} = state
  return {
    name: user.name,
    avat: user.avat
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {dispatch(logout())}
  }
}
const Me = connect(
  mapStateToProps,
  mapDispatchToProps
)(me)

export default Me