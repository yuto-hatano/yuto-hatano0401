<template>
  <div id="skillSection">
    <h1 id="skillTitle">
      Skill set
    </h1>

    <div id="skillExplain">
      <p>
        修練の末に身に着けたスキルをまとめました。
        広く浅くではありますがフロントからバックエンドまで
        幅広くスキルアップに取り組んでいます。
        まだ全体的に理解が浅く、専門性に乏しいことを認識しております。
        今後はまずフロントエンド系の業務に関わる比率を増やし、
        少しずつ専門性を高めていく事を目指しています。
      </p>
    </div>

    <div id="gitHubLabel">
      <label for="gitHubLink"><h2>GitHub:</h2></label>
      <a
        id="gitHubLink"
        href="https://github.com/yuto-hatano"
        target="_blank"
      > 
        https://github.com/yuto-hatano
      </a>
    </div>

    <div id="skillCategories">
      <button 
        id="Frontend"
        type="button"
        :class="{'frontChange':isFrontActive}"
        @click="setCurrentChart('Frontend')"
      >
        Front-end
      </button>

      <button
        id="Backend"
        type="button"
        :class="{'backChange':isBackActive}"
        @click="setCurrentChart('Backend')"
      >
        Back-end
      </button>

      <button
        id="Devops"
        type="button"
        :class="{'devChange':isDevOpsActive}"
        @click="setCurrentChart('Devops')"
      >
        Dev-ops
      </button>
    </div>

    <div class="skillList">
      <label
        class="FrontSkill"
        :class="{'frontChange':isFrontActive}"
      >
        HTML
      </label>

      <label
        class="FrontSkill"
        :class="{'frontChange':isFrontActive}"
      >
        CSS
      </label>

      <label
        class="FrontSkill"
        :class="{'frontChange':isFrontActive}"
      >
        Javascript
      </label>

      <label
        class="FrontSkill"
        :class="{'frontChange':isFrontActive}"
      >
        SCSS
      </label>
      
      <label
        class="FrontSkill"
        :class="{'frontChange':isFrontActive}"
      >
        Vue
      </label>
    </div>

    <div class="skillList">
      <label
        class="BackSkill"
        :class="{'backChange':isBackActive}"
      >
        Java
      </label>

      <label
        class="BackSkill"
        :class="{'backChange':isBackActive}"
      >
        Ruby
      </label>

      <label
        class="BackSkill"
        :class="{'backChange':isBackActive}"
      >
        RubyOnRails
      </label>

      <label
        class="BackSkill"
        :class="{'backChange':isBackActive}"
      >
        MySQL
      </label>
    </div>

    <div class="skillList">
      <label
        class="DevSkill"
        :class="{'devChange':isDevOpsActive}"
      >
        Linux
      </label>

      <label
        class="DevSkill"
        :class="{'devChange':isDevOpsActive}"
      >
        Node
      </label>

      <label
        class="DevSkill"
        :class="{'devChange':isDevOpsActive}"
      >
        Git
      </label>

      <label
        class="DevSkill"
        :class="{'devChange':isDevOpsActive}"
      >
        GitHub
      </label>

      <label
        class="DevSkill"
        :class="{'devChange':isDevOpsActive}"
      >
        Firebase
      </label>
    </div>

    <div 
      v-if="isFrontActive"
      class="skillGraph"
    >
      <Frontchart />
    </div>

    <div
      v-if="isBackActive"
      class="skillGraph"
    >
      <Backchart />
    </div>

    <div
      v-if="isDevOpsActive"
      class="skillGraph"
    >
      <Devchart />
    </div>
  </div>
</template>

<script>
import Frontchart from './Frontchart.vue';
import Backchart from './Backchart.vue'
import Devchart from './Devchart.vue'

export default {
  name: 'Skill',
  components: {
    Frontchart,
    Backchart,
    Devchart,
  },
  data(){
    return{
      currentChart:'Frontend'
    }
  },
  computed:{
    isFrontActive(){
      return this.currentChart=='Frontend';
    },
    isBackActive(){
      return this.currentChart=='Backend';
    },
    isDevOpsActive(){
      return this.currentChart=='Devops';
    },
  },
  methods:{
    setCurrentChart(chart){
      this.currentChart = chart;
    }
  },
}
</script>

<style scoped>
#skillSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  margin-top: -60px;
  padding-top: 55px;
  margin-bottom: 60px;
  text-align: center;
}

#skillTitle {
  font-style: bold;
  font-size: 18pt;
  color: #20879f;
  text-shadow: 2px 3px 4px #808080;
  padding: 5px;
  text-align: center;
}

#skillExplain {
  font-size: 12pt;
  color: #707070;
  word-break: normal;
  line-height: 1.25em;
  padding: 20px 50px;
  text-align: left;
}

#gitHubLabel {
  font-size: 12pt;
  color: #20879f;
}

#gitHubLink {
  color: #20879f;
  padding: 20px 0;
}

#skillCategories {
  font-style: bold;
  padding: 20px;
  text-align: center;
}

button {
  cursor: pointer;
  margin: 0 20px;
  padding: 10px;
  border: 1px;
}

#Frontend {
  color: #b51a1a;
}

#Backend {
  color: #0f8839;
}

#Devops {
  color: #571083;
}

.skillList {
  font-size: 12pt;
  font-style: bold;
}

.FrontSkill {
  color: #b51a1a;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
  padding: 3px 5px;
}

.frontChange {
  color: #b51a1a;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
  padding: 7px 9px;
  background-color: rgba(181, 26, 26, 0.25);
  border-style: none;
}

.BackSkill {
  color: #0f8839;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
  padding: 3px 5px;
}

.backChange {
  color: #0f8839;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
  padding: 7px 9px;
  background-color: rgba(15, 136, 57, 0.25);
}

.DevSkill {
  color: #571083;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
  padding: 3px 5px;
}

.devChange {
  color: #571083;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
  padding: 7px 9px;
  background-color: rgba(87, 16, 131, 0.25);
}

.skillGraph {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 67%;
  padding: 20px;
}
</style>

