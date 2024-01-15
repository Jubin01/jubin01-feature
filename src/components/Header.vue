<template>
  <header class="header">
    <router-link to="/"><span>🏠 {{ title }}</span></router-link>
    <span><router-link to="/notes"><img alt="Notes" src="assets/icons/notes.png" /></router-link> &nbsp;
    <a href="https://jubin01.blogspot.com/" target="_blank"> <img alt="Vue logo" src="assets/icons/blogger.png" /></a></span>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #9b27af;
  padding: 3px 10px;
}

.header span {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
}

img {
    height: 20px;
}

</style>