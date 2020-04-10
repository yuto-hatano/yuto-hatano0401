<template lang="html">
  <div id="Header">
    <button
      id="button"
      class="btn btn-success"
      @click="toggle"
    >
      <img
        id="humburger"
        src="@/assets/humburger.png"
        alt="メニュー"
      >
    </button>
    
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        content here
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";


export default {
  name: 'Header',
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style scoped>
#Header {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

#button {
  width: 60px;
  height: 50px;
  box-shadow: none;
  border-style: none;

  /* 透過の設定 */
  opacity: 0.3;
  background-color: #f3f3f3;
  background-size: cover;
}

#humburger {
  height: 47%;
  width: 47%;
}
</style>

