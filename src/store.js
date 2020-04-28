import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const store = new Vuex.Store({ 
    state:{
        graphScore: [],
        loaded:false,
        index:{'frontEnd':0,'backEnd':1,'devOps':2}
    },
    getters:{
        graphScore:(state) => (index) => {
            const scoreAllay = []
            state.graphScore[index].skills.forEach((skillInfo)=>{
            scoreAllay.push(skillInfo.score)
            })
            return scoreAllay
        },

        graphName:(state) => (index) => {
            const scoreAllay = []
            state.graphScore[index].skills.forEach((skillInfo)=>{
            scoreAllay.push(skillInfo.name)
            })
            return scoreAllay
        },

        
    },
    mutations:{
        setGraphScore(state,paylord){
            state.graphScore=paylord.graphScore
            state.loaded=true
        },
    },
    actions:{
        async getGraphScore({commit}){
            const graphScore=[];
            const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillcategory';
            const res = await axios.get(functionsUrl);
            res.data.forEach((score)=>{
                graphScore.push(score);
            });
            commit('setGraphScore',{graphScore});
        },
    }
});


export default store