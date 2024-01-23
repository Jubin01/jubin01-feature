<template>
  <div id="app">
    <Header title="JUBITRICK" />
    <nav>
     <!-- <router-link to="/">Home</router-link> | -->
      
      <router-link to="/games">Games</router-link> |
      <router-link to="/apps">Apps</router-link> 
    </nav>
    <router-view />
    <Footer />
    <!-- <Input @onEnter="addToDo" label="New task" /> -->
    <!-- <ToDos :todos.sync="todos" /> -->
    <Softkey :softkeys.sync="softkeys" />
    <!-- <h1 v-on:click="addToDo">jsut a add button here</h1> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Input from "./components/Input";
// import ToDos from "./components/Todos";
import Softkey from "./components/Softkey";
import Navigation from "./Navigation";

export default {
  name: "App",
  components: {
    Header,
    // Input,
    // ToDos,
    Footer,
    Softkey
  },
  data: () => ({
    // todos: [],
    softkeys: {
      left: "",
      center: "",
      right: ""
    }
  }),
  mounted() {
    document.write("<style type='text/css'>.noscript { display: none; }</style>");
   // Navigation.init();
    document.addEventListener('keydown', this.onKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
  },
  methods: {
    // addToDo(name) {
    //   this.todos.push({ name, completed: false });
    // },
    onKeyDown(event) {
      switch (event.key) {
        case "ArrowDown":
          Navigation.Down();
          this.updateSoftkey();
          break;
        case "ArrowUp":
          Navigation.Up();
          this.updateSoftkey();
          break;
        case "Enter":
          //return this.toggleToDo();
          break;
        case "SoftRight":
          //return this.deleteToDo();
          break;
        default:
          break;
      }
    },
    updateSoftkey() {
      const inputSoftKey = { left: "", center: "", right: "" };
      //const toDoSoftKey = { left: "", center: "Toggle", right: "Delete" };
      //const [isATask] = this.isATask();

      // if (isATask && this.softkeys !== toDoSoftKey) {
      // this.softkeys = toDoSoftKey;
      //} else if (!isATask && this.softkeys !== inputSoftKey) {
      this.softkeys = inputSoftKey;
      //}
    },
    // isATask() {
    //   const [currentElement, currentIndex] = Navigation.getCurrentItem();
    //   const isATask = currentElement.nodeName === "SPAN";
    //   return [isATask, currentIndex];
    // },
    // toggleToDo() {
    //   const [isATask, currentIndex] = this.isATask();
    //   if (!isATask) return;
    //   const toDoSelected = this.todos[currentIndex - 1];
    //   this.todos[currentIndex - 1].completed = !toDoSelected.completed;
    // },
    // deleteToDo() {
    //   const [isATask, currentIndex] = this.isATask();
    //   if (!isATask) return;
    //   this.todos.splice(currentIndex - 1, 1);
    //   Navigation.Up();
    //   this.updateSoftkey();
    // }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#root {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  background-color: #E1E2E1 !important;
}

</style>
