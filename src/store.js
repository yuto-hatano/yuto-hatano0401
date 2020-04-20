import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({ //ここに実装を書く
    state:{
        graphScore: []
    },
    mutations:{
        setGraphScore(state,paylord){
            state.graphScore=paylord.graphScore
        }
    },
    getters:{
        graphScore(state) {
            return state.graphScore
        }
    },
    actions:{
        getSkills({commit},graphScore){
        commit('setGraphScore',{graphScore})
        }
    }
})


export default store