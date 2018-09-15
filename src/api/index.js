import user from './user'
import chat from './chat'

export const apiUserRegister = user.register
export const apiUserLogin = user.login
export const apiUserGetInfo = user.getinfo


export const apiChatSend = chat.send
export const apiChatUserList = chat.userList




export const apiUserlogout = user.logout
export const apiUserTest = user.test