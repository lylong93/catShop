import {
  connect
} from 'react-redux'
import {
  login,
  ttt
} from '@/store/actions/user'

import ChatUI from './ChatUI'

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    num: '1'
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(ttt())
    }
  }
}
const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatUI)

export default Chat