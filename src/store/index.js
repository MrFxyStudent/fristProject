import { createStore } from 'vuex'

export default createStore({
    state: {
        imgNum: 0
    },
    mutations: {
        imgNumAdd(state) {
            state.imgNum++;
            console.log(state.imgNum);
        }
    },
    actions: {},
    modules: {}
})