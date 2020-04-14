<template>
  <div id="drawerSection">
    <div>
      <ul id="drawerMenuSection">
        <li>
          <a
            class="drawerMenuItemLink"
            href="#"
            @click="Top()"
          >Home</a>
        </li>

        <li>
          <a
            class="drawerMenuItemLink"
            href="#"
            @click="About()"
          >About me</a>
        </li>

        <li>
          <a
            class="drawerMenuItemLink"
            href="#"
            @click="Skill()"
          >Skill</a>
        </li>

        <li>
          <a
            class="drawerMenuItemLink"
            href="#"
            @click="Vision()"
          >Vision</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    Top () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#Header'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },

    About () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#aboutSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },

    Skill () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#skillSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },

  Vision () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#visionSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    }
  }
  }

</script>

<style scoped>
#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

#drawerMenuSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  text-align: center;
  padding: 30px;
}

li {
  color: #707070;
  background-color: #fff;
  width: 100%;
  height: 50px;
}

.drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}
</style>
