import { createStore, useStore as baseUseStore } from 'vuex'
import type { Store } from 'vuex'
import type { UsersState } from './modules/users'
import type { SignsState } from './modules/signs'
import type { NewsState } from './modules/news'
import type { ChecksState } from './modules/checks'
import type { InjectionKey } from 'vue'
import users from './modules/users'
import signs from './modules/signs'
import news from './modules/news'
import checks from './modules/checks'

export interface State {
  [index: string]: unknown
}

interface StateAll extends State {
  users: UsersState
  signs: SignsState
  news: NewsState
  checks: ChecksState
}

export const key: InjectionKey<Store<StateAll>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}

export default createStore<State>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    signs,
    news,
    checks,
  },
})
