export { default as Chat } from '../..\\components\\Chat.vue'
export { default as ChatHeader } from '../..\\components\\ChatHeader.vue'
export { default as Message } from '../..\\components\\Message.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as SidebarChannel } from '../..\\components\\SidebarChannel.vue'

export const LazyChat = import('../..\\components\\Chat.vue' /* webpackChunkName: "components_Chat" */).then(c => c.default || c)
export const LazyChatHeader = import('../..\\components\\ChatHeader.vue' /* webpackChunkName: "components_ChatHeader" */).then(c => c.default || c)
export const LazyMessage = import('../..\\components\\Message.vue' /* webpackChunkName: "components_Message" */).then(c => c.default || c)
export const LazySidebar = import('../..\\components\\Sidebar.vue' /* webpackChunkName: "components_Sidebar" */).then(c => c.default || c)
export const LazySidebarChannel = import('../..\\components\\SidebarChannel.vue' /* webpackChunkName: "components_SidebarChannel" */).then(c => c.default || c)
