import {
  connect
} from 'react-redux'
import {
  login,
  ttt
} from '@/store/actions/user'

import ChatList from '@/containers/ChatList'

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
)(ChatList)

export default Chat