import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const store = new Vuex.Store({ 
    state:{
        graphScore: [],
        loaded:false
    },
    getters:{
        frontGraphScore(state) {
            const scoreAllay = []
            state.graphScore[0].skills.forEach((skillInfo)=>{
            scoreAllay.push(skillInfo.score)
            })
            return scoreAllay
        },

        frontGraphName(state) {
            const scoreAllay = []
            state.graphScore[0].skills.forEach((skillInfo)=>{
            scoreAllay.push(skillInfo.name)
            })
            return scoreAllay
        },

        backGraphScore(state) {
            const scoreAllay = []
            state.graphScore[1].skills.forEach((skillInfo)=>{
            scoreAllay.push(skillInfo.score)
            })
            return scoreAllay},
        
        backGraphName(state) {
            const scoreAllay = []
            state.graphScore[1].skills.forEach((skillInfo)=>{
            scoreAllay.push(skillInfo.name)
            })
            return scoreAllay
            },

        devOpsGraphScore(state) {
            const scoreAllay = []
            state.graphScore[2].skills.forEach((skillInfo)=>{
            scoreAllay.push(skillInfo.score)
            })
            return scoreAllay
        },

        devOpsGraphName(state) {
            const scoreAllay = []
            state.graphScore[2].skills.forEach((skillInfo)=>{
                scoreAllay.push(skillInfo.name)
            })
            return scoreAllay
        }
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
            const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillCategories';
            const res = await axios.get(functionsUrl);
            res.data.forEach((score)=>{
                graphScore.push(score);
            });
            commit('setGraphScore',{graphScore});
        },
    }
});


export default store