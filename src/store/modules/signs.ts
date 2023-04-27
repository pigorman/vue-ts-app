import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '..'
// import http from '@/utils/http'

export interface SignsState {
  name: string
}

const state: SignsState = { name: 'alex' }
const getters: GetterTree<SignsState, State> = {}
const mutations: MutationTree<SignsState> = {}
const actions: ActionTree<SignsState, State> = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
