<script>
import { Radar } from 'vue-chartjs';
import score from 'vuex'

export default {
  name: 'Frontchart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Frontend',
            data: [{score}],
            backgroundColor: [
              'rgba(181, 26, 26,0.25)'
            ],
            borderColor: [
              'rgba(181, 26, 26,0.75)',
              'rgba(181, 26, 26,0.75)',
              'rgba(181, 26, 26,0.75)',
              'rgba(181, 26, 26,0.75)',
              'rgba(181, 26, 26,0.75)',
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale:{
          scalelabel:{
            fontFamily:'Noto Sans JP',
            fontSize:100,
            },
          ticks:{
            suggestedMax: 50,
              suggestedMin: 0,
                stepSize: 10,
          }
        },
        legend:{
          display: false,
        }
      },
    }
  },
  computed: {
    //main.jsでローカルにstoreを登録してるので、$storeが使える
    //ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
    score(){
     return this.$store.getters.graphScore
  }},

  mounted () {
    this.renderChart(this.data, this.options),
    this.$store.dispatch('getGraphScore')
  },
  } 
</script>