<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      <h1>About Me!</h1>
    </div>

    <div id="aboutExplain">
      <h2>sample</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#aboutSection{
  background-color:#F5F5F5;
  width:100%;
  height:auto;
  text-align:center;
}

#aboutTitle{
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  font-family: 'Noto Sans JP', sans-serif;
  font-style:Bold;
  font-size: 18pt ;
  color:#20879F;
  text-shadow: 2px 3px 4px #808080;
  padding: 20px;
}

#aboutExplain{
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  font-family: 'Noto Sans JP', sans-serif;
  font-style:Bold;
  font-size: 12pt ;
  color:#707070;
  word-break: keep-all;
  line-height:0.25em;
  padding:5px;
}
</style>