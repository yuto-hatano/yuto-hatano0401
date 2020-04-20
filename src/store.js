import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({ //ここに実装を書く
    state:{
        graphScore: []
    },
    mutations:{
        increment(state,paylord){
            state.graphScore=paylord
        }
    },
    getters:{
        getGraphScore: state=>{
            return state.increment.paylord
        }
    }
    })

export default store