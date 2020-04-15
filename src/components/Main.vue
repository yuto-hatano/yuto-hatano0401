<template lang="html">
  <div id="mainSection">
    <div
      id="userName"
      class="Name"
    >
      <h1>Y.Hatano</h1>
    </div>
  
    <div
      id="companyName"
      class="Name"
    >
      <h1>Seattle consulting</h1>
    </div>

    <img
      id="profilePicture"
      src="@/assets/introduce.png"
      alt="紹介画像"
    >
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>


<style scoped>
#mainSection {
  width: 100%;
  height: auto;
  padding-top: 50px;
  margin-bottom: 60px;
  padding-bottom: -60px;
  min-height: 200px;
  border-bottom: solid 1px #cbcbcb;


  /* グラデーション */
  background: -moz-linear-gradient(top, #80e1f7, #06c1e6);
  background: -webkit-linear-gradient(top, #80e1f7, #06c1e6);
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  text-align: center;
}

#userName {
  padding: 25px 20px 15px;
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  border-bottom: 2px solid #fff;
}

#companyName {
  padding: 10px;
}

#profilePicture {
  width: 30%;
  height: 30%;
  background-position: center;
  border-radius: 50%;
  padding: 10px;
}

.Name {
  font-family: 'Noto Sans JP', sans-serif;
  font-style: bold;
  font-size: 18pt;
  color: #fff;
  text-shadow: 2px 3px 4px #808080;
}
</style>
