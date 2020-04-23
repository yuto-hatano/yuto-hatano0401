<script>
import { Radar } from 'vue-chartjs';
import store from '../store'

export default {
  name: 'Devchart',
  extends: Radar,
  store,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Dev-ops',
            data: [],
            backgroundColor: [
              'rgba(87, 16, 131,0.25)'
            ],
            borderColor: [
              'rgba(87, 16, 131,0.75)',
              'rgba(87, 16, 131,0.75)',
              'rgba(87, 16, 131,0.75)',
              'rgba(87, 16, 131,0.75)',
              'rgba(87, 16, 131,0.75)',
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
    const score = this.$store.getters.devOpsGraphScore
    this.data.datasets[0].data = score
  },
  getName(){
    const name = this.$store.getters.devOpsGraphName
    this.data.labels= name
    }},
}
</script>