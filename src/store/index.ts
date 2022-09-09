import { createStore } from "vuex";


const store = createStore({
    state :() => {
        return {
            name:'coder'
        }
    },
    mutations:{
        changeName (state) {
            state.name
        }
    },
    getters:{},
    actions:{}  
})
export default store