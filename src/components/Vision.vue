<template>
  <div id="visionSection">
    <div id="visionTitle">
      <h1>Vision</h1>
    </div>

    <div id="visionExplain">
      <p>
        VR,ARといった拡張現実を用いて、
        目に見えない世界を可視化するようなプロダクトを開発したいと考えています。
        とはいえ、技術力のない身ですので今後とも専門性を高め研鑽を積んでいきます。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vision'
}
</script>

<style scoped>
#visionSection {
  background: radial-gradient(#f5f5f5);
  width: 100%;
  height: auto;
  margin-top: -60px;
  padding-top: 60px;
  text-align: center;
}

#visionTitle {
  font-style: bold;
  font-size: 18pt;
  color: #20879f;
  text-shadow: 2px 3px 4px #808080;
  padding: 10px;
}

#visionExplain {
  font-size: 12pt;
  color: #707070;
  word-break: normal;
  line-height: 1.25em;
  padding: 20px 50px;
  text-align: left;
}
</style>