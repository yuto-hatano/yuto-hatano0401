<template>
  <div id="skillSection">
    <h1 id="skillTitle">
      Skill set
    </h1>

    <div id="skillExplain">
      <p>sample</p>
    </div>

    <div id="gitHubLabel">
      <p>label</p>
    </div>

    <a
      id="gitHubLink"
      href="https://github.com/yuto-hatano"
    > 
      GitHub:https://github.com/yuto-hatano
    </a>
  </div>
</template>

<script>
export default {
  name: 'Skill'
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
  padding: 20px;
}
</style>

