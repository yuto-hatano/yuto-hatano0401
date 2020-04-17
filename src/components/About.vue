<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      <h1>About Me</h1>
    </div>

    <div id="aboutExplain">
      <p>
        大分出身の新米Webエンジニア。
        熊本大学工学部に入学後、教員を目指し教育学部に転部。
        教育にプログラミングなどが導入される潮流を感じ、
        今後の社会にはITの技術が必要であると一念発起。IT業界での就職を目指す。
        大学卒業後、シアトルコンサルティングに入社。
        高い技術を持ったエンジニアを目指して日々研鑽を積んでいる。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#aboutSection {
  background-color: #f5f5f5;
  width: 100%;
  margin-top: -60px;
  padding-top: 55px;
  margin-bottom: 60px;
  padding-bottom: -60px;
  height: auto;
  text-align: center;
}

#aboutTitle {
  font-style: bold;
  font-size: 18pt;
  color: #20879f;
  text-shadow: 2px 3px 4px #808080;
  padding: 10px;
}

#aboutExplain {
  font-style: bold;
  font-size: 12pt;
  color: #707070;
  word-break: normal;
  line-height: 1.25em;
  padding: 20px 50px;
  text-align: left;
}
</style>
