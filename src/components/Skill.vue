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
      > 
        https://github.com/yuto-hatano
      </a>
    </div>

    <div id="skillCategories">
      <a id="Frontend">
        Front end
      </a>

      <a id="Backend">
        Back end
      </a>

      <a id="Div-ops">
        Div-ops
      </a>
    </div>

    <div class="skillList">
      <button
        class="FrontSkill"
        type="button"
      >
        <span>HTML</span>
      </button>

      <button
        class="FrontSkill"
        type="button"
      >
        <span>CSS</span>
      </button>

      <button
        class="FrontSkill"
        type="button"
      >
        <span>Javascript</span>
      </button>

      <button
        class="FrontSkill"
        type="button"
      >
        <span>SCSS</span>
      </button>
      
      <button
        class="FrontSkill"
        type="button"
      >
        <span>Vue</span>
      </button>
    </div>

    <div class="skillList">
      <button
        class="BackSkill"
        type="button"
      >
        <span>Java</span>
      </button>

      <button
        class="BackSkill"
        type="button"
      >
        <span>Ruby</span>
      </button>

      <button
        class="BackSkill"
        type="button"
      >
        <span>RubyOnRails</span>
      </button>

      <button
        class="BackSkill"
        type="button"
      >
        <span>MySQL</span>
      </button>
    </div>

    <div class="skillList">
      <button
        class="DevSkill"
        type="button"
      >
        <span>Linux</span>
      </button>

      <button
        class="DevSkill"
        type="button"
      >
        <span>Node</span>
      </button>

      <button
        class="DevSkill"
        type="button"
      >
        <span>Git</span>
      </button>

      <button
        class="DevSkill"
        type="button"
      >
        <span>GitHub</span>
      </button>

      <button
        class="DevSkill"
        type="button"
      >
        <span>Firebase</span>
      </button>
    </div>

    <div id="skillGraph">
      <chart />
    </div>
  </div>
</template>

<script>
import Chart from './Frontchart.vue';

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

#Frontend {
  color: #b51a1a;
  padding: 10px;
}

#Backend {
  color: #0f8839;
  padding: 10px;
}

#Div-ops {
  color: #571083;
  padding: 10px;
}

.skillList {
  font-size: 12pt;
  font-style: bold;
}

.FrontSkill {
  color: #b51a1a;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
}

.BackSkill {
  color: #0f8839;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
}

.DevSkill {
  color: #571083;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
}

#skillGraph {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  padding: 20px;
}
</style>

