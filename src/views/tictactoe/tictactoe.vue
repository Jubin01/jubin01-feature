<template>
  <div class="tictactoe">
    <Board/>
  </div>
</template>

<script>
import Board from "../../components/board/board.vue";

export default {
  name: 'Tictactoe',
  components: {
    Board
  },
  data: () => ({

  }),
  mounted() {

  }
};
</script>