<template>
  <div id="skillSection">
    <h1 id="skillTitle">
      Skill set
    </h1>

    <div id="skillExplain">
      <p>sample</p>
    </div>

    <div id="gitHubLabel">
      <label for="gitHubLink">GitHub:</label>
      <a
        id="gitHubLink"
        href="https://github.com/yuto-hatano"
      > 
        https://github.com/yuto-hatano
      </a>

      <div>
        <h1>棒グラフと線グラフ</h1>
        <chart />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './chart.vue';

export default {
  name: 'Skill',
  components: {
    Chart,
  },
}
</script>

<style scoped>
#skillSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  text-align: center;
}

#skillTitle {
  font-family: 'Noto Sans JP', sans-serif;
  font-style: bold;
  font-size: 18pt;
  color: #20879f;
  text-shadow: 2px 3px 4px #808080;
  padding: 5px;
  text-align: center;
}

#skillExplain {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  color: #707070;
  word-break: keep-all;
  line-height: 0.25em;
  padding: 20px;
}

#gitHubLabel {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  color: #20879f;
}

#gitHubLink {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  color: #20879f;
  padding: 20px 0;
}
</style>

