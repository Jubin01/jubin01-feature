<template>
  <div class="square">
    <button :data-player="value" @click="$emit('click')">{{ value }}</button>
  </div>
</template>

<script>
export default{
  name:"Square",
  props:{
    value:{
      type:String,
      required: true
    }
  }
}
</script>

<style scoped>
.square {
  position: relative;
  box-sizing: border-box;
}

.square:before {
  content: "";
  display: block;
  padding-top: 100%;
}

button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 2em !important;
}

button[data-player="X"] {
  color: darkgreen;
  background-color: aquamarine;
}
button[data-player="O"] {
  color: lightcoral;
  background-color: blanchedalmond;
}
</style>