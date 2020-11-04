import { createStore } from 'vuex'

export default createStore({
    state: {
        imgNum: 0
    },
    mutations: {
        imgNumAdd(state) {
            state.imgNum++;
        }
    },
    actions: {},
    modules: {}
})