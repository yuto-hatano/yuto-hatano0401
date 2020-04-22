import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const store = new Vuex.Store({ //ここに実装を書く
    state:{
        graphScore: []
    },
    getters:{
        graphScore(state) {
            return state.graphScore.score
        }
    },
    mutations:{
        setGraphScore(state,paylord){
            state.graphScore=paylord.graphScore
        }
    },
    actions:{
        async getGraphScore({commit}){
            const graphScore=[];
            const res = await axios.get('https://us-central1-yuto-hatano.cloudfunctions.net/skillcategory');
            res.data.forEach((score)=>{
                graphScore.push(score);
            });
            commit('setGraphScore',{graphScore});
        },
    }
});


export default store