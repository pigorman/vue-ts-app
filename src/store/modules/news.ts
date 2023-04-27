import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '..'
// import http from '@/utils/http'

export interface NewsState {
  name: string
}

const state: NewsState = { name: 'alex' }
const getters: GetterTree<NewsState, State> = {}
const mutations: MutationTree<NewsState> = {}
const actions: ActionTree<NewsState, State> = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
