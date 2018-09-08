import {
  connect
} from 'react-redux'
import {
  logout
} from '@/store/actions/user'

import {apiUserRegister} from '@/api';

import me from './me'
// const test = () => {
//   setTimeout(function(){ console.log('test') },5000)
// }

const mapStateToProps = (state, ownProps) => {
 const {user} = state
  return {
    name: user.name,
    avat: user.avat
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
     dispatch(logout())
    }
  }
}
const Me = connect(
  mapStateToProps,
  mapDispatchToProps
)(me)

export default Me