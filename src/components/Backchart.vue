<script>
import { Radar } from 'vue-chartjs';
import store from '../store'

export default {
  name: 'Backchart',
  store,
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Back-end',
            data: [],
            backgroundColor: [
              'rgba(15, 136, 57,0.25)'
            ],
            borderColor: [
              'rgba(15, 136, 57,0.75)',
              'rgba(15, 136, 57,0.75)',
              'rgba(15, 136, 57,0.75)',
              'rgba(15, 136, 57,0.75)'
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale:{
          scalelabel:{
            fontFamily:'Noto Sans JP',
            fontSize:30,
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
      }
    }
  },
  created(){    
    this.getSkills()
    this.getName()
    },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills(){
    const score = this.$store.getters.graphScore(this.$store.state.index['backEnd'])
    this.data.datasets[0].data = score
    },
    getName(){
    const name = this.$store.getters.graphName(this.$store.state.index['backEnd'])
    this.data.labels= name
    }
  }
}
</script>