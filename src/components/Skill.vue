<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>Skill Set</h1>
    </div>

    <div id=skillExplain>
      <p>sample</p>
    </div>

    <div id="gitHubLabel">
      <p>label</p>
    </div>

    <a href="https://github.com/yuto-hatano" id="gitHubLink"> 
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
#skillSection{
  background-color:#FFFFFF;
  width:100%;
  height:auto;
  text-align:center;
  padding:20px;
}

#skillTitle{
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  font-family: 'Noto Sans JP', sans-serif;
  font-style:Bold;
  font-size: 18pt ;
  color:#20879F;
  text-shadow: 2px 3px 4px #808080;
  text-align:center;
  padding:5px;
}

#skillExplain{
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt ;
  color:#707070;
  word-break: keep-all;
  line-height:0.25em;
  padding: 20px;
}

#gitHubLabel{
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt ;
  color:#20879F;
}

#gitHubLink{
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt ;
  color:#20879F;
  padding: 20px;
}
</style>
