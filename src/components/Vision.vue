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
export default {
  name: 'Vision'
}
</script>

<style scoped>
#visionSection{
background: radial-gradient(#F5F5F5);
width:100%;
height:auto;
text-align: center;
}

#visionTitle{
  font-family: 'Noto Sans JP', sans-serif;
  font-style:Bold;
  font-size: 18pt ;
  color:#20879F;
  text-shadow: 2px 3px 4px #808080;
  padding:10px;
}

#visionExplain{
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt ;
  color:#707070;
  word-break: keep-all;
  line-height:0.25em;
  padding: 20px;
}
</style>