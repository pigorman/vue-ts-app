import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '..'
// import http from '@/utils/http'

export interface ChecksState {
  name: string
}

const state: ChecksState = { name: 'alex' }
const getters: GetterTree<ChecksState, State> = {}
const mutations: MutationTree<ChecksState> = {}
const actions: ActionTree<ChecksState, State> = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
