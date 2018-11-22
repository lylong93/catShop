import user from './user'
import chat from './chat'

export const apiUserRegister = user.register
export const apiUserLogin = user.login
export const apiUserGetInfo = user.getInfo
export const apiUserUpToken = user.upToken

export const apiChatSend = chat.send
export const apiChatUserList = chat.userList
export const apiGetMstList = chat.getMstList

export const apiUserlogout = user.logout
export const apiUserTest = user.test