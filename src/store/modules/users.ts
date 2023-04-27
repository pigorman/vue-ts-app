import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '..'
import http from '@/utils/http'

export interface UsersState {
  name: string
}

const state: UsersState = { name: 'alex' }
const getters: GetterTree<UsersState, State> = {}
const mutations: MutationTree<UsersState> = {}
const actions: ActionTree<UsersState, State> = {
  login(state, payload) {
    return http.post('/users/login', payload)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
