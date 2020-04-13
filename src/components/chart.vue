<template>
  <div id="visionSection">
    <div id="visionTitle">
      <h1>Vision</h1>
    </div>

    <div id="visionExplain">
      <p>sample</p>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Bar,
  data () {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [10, 20, 30, 40, 50, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [10, 50, 20, 30, 30, 40],
            borderColor: '#CFD8DC',
            fill: false,
            type: 'line',
            lineTension: 0.3,
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>
#visionSection {
  background: radial-gradient(#f5f5f5);
  width: 100%;
  height: auto;
  text-align: center;
}

#visionTitle {
  font-family: 'Noto Sans JP', sans-serif;
  font-style: bold;
  font-size: 18pt;
  color: #20879f;
  text-shadow: 2px 3px 4px #808080;
  padding: 10px;
}

#visionExplain {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  color: #707070;
  word-break: keep-all;
  line-height: 0.25em;
  padding: 20px;
}
</style>