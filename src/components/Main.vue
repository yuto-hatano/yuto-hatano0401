<template>
  <div id="mainSection">
    <div id = "userName" style="text-align:center;">
      羽田野 裕人
    </div>
  
    <div id="companyName" style="text-align:center;">
      Seattle consulting
    </div>

    <img id = "profilePicture" src="@/assets/introduce.png" alt="紹介画像" />
  </div>
</template>

<script>
export default {
  name: 'Main'
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
}

#userName{
  color: #FFFFFF;
  text-shadow: 3px 4px 5px #808080;
  font-family: "Noto Sans";
  src: url("/fonts/NotoSans-unhinted");
  font-style:Bold;
  font-size: 18pt ;
  padding: 10px;
}

#companyName{
  color: #FFFFFF;
  text-shadow: 3px 4px 5px #808080;
  font-family: "Noto Sans";
  src: url("/fonts/NotoSans-unhinted");
  font-style:Bold;
  font-size: 18pt ;
  padding: 10px;
}


#profilePicture{
  width:64px;
  height:64px; 
  background-position: center ;
  Border-radius:50%;
  margin-left:
}
</style>