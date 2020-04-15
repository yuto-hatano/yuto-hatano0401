<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Backchart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Back-end',
            data: [10, 20, 30, 40],
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
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>