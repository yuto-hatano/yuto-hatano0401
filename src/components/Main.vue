<template lang="html">
  <div id="mainSection">
    <div id="userName" class="Name">
      <h1>Y.Hatano</h1>
    </div>
  
    <div id="companyName" class="Name">
      <h1>Seattle consulting</h1>
    </div>

    <img id="profilePicture" src="@/assets/introduce.png" alt="紹介画像"  style = "text-align:center"/>

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
  height:auto;

  /*グラデーション*/
  background: -moz-linear-gradient(top, #80E1F7, #06C1E6);
  background: -webkit-linear-gradient(top, #80E1F7, #06C1E6);
  background: linear-gradient(to bottom, #80E1F7, #06C1E6);
  text-align:center;
}

#userName {
  padding:25px 20px 15px;
  width:150px;
  margin-right:auto;
  margin-left:auto;
  border-bottom: 2px solid #FFFFFF;
}

#companyName{
  padding:10px;
}

#profilePicture{
  width:64px;
  height:64px; 
  background-position: center ;
  Border-radius:50%;
  padding:10px;
}

.Name{
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  font-family: 'Noto Sans JP', sans-serif;
  font-style:Bold;
  font-size: 18pt ;
  color: #FFFFFF;
  text-shadow: 2px 3px 4px #808080;
}
</style>