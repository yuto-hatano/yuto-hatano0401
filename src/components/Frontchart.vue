<script>
import { Radar } from 'vue-chartjs';

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
            data: [30, 30, 20, 20, 20],
            backgroundColor: [
              'rgba(181, 26, 26,0.25)'
            ],
            borderColor: [
              'rgba(181, 26, 26,0.75)'
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
      },
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>