<script>
import { Radar } from 'vue-chartjs';
import store from '../store'

export default {
  name: 'Frontchart',
  store,
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Frontend',
            data: [],
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
  created(){
    this.getScores(),
    this.getName()
  },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods: {
    getScores(){
    const score = this.$store.getters.graphScore(this.$store.state.index['frontEnd'])
    this.data.datasets[0].data = score
    },

    getName(){
    const name = this.$store.getters.graphName(this.$store.state.index['frontEnd'])
    this.data.labels= name
    }
  }
  } 
</script>