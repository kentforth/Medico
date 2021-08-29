// eslint-disable-next-line import/named
import { MutationTree } from 'vuex'
import { IHeader } from '~/store/header/state'

const mutations: MutationTree<IHeader> = {
  SET_SEARCH_INPUT_PLACEHOLDER(state, placeholderText) {
    state.placeholder = placeholderText
  },
}

export default mutations
