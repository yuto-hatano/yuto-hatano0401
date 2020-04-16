<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Devchart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'Dev-ops',
            data: [30, 10, 40, 30, 20],
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
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>