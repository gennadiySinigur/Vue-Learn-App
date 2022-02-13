<template>
  <div class="home">
    <h1>Welcome to Vue 2</h1>
    <ol>
      <li v-for="todo in todos">
        <todo-item :text="todo.text" />
      </li>
    </ol>

    <div  class="message">
      <div>{{ message }}</div>
      <button @click="reverseMessage">Reverse message</button>
    </div>

    <div class="my-input">
      <p>{{ inputMessage }}</p>
      <input
        v-model="inputMessage"
        type="text"
        placeholder="Enter message"
      >
    </div>

    <div class="js-expressions">
      <p>{{ ok ? `It's ok` : 'Something went wrong' }}</p>
      <p>{{ 2 + 3 }}</p>
      <p>{{ new Date() }}</p>
    </div>

    <div class="directives">
      <p v-if="seen">Now you see me</p>
      <button @click="seeMessage">{{ !seen ? 'See message' : 'Hide message' }}</button>
    </div>

    <div class="computed-props">
      <p>Original name: {{ name }}</p>
      <p>Reversed name: {{ reversedName }}</p>
    </div>

    <div>Today is {{ timeNow }}</div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: 'Home',

  components: {
    TodoItem,
  },

  data() {
    return {
      todos: [
        {text: 'Learn Vue 2'},
        {text: 'Learn Vuex'},
        {text: 'Learn Nuxt js'},
        {text: 'Learn backend'},
      ],
      message: 'Learn Vue.js',
      inputMessage: '',
      ok: false,
      seen: false,
      name: 'Gennadiy Sinigur',
    }
  },

  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },

    seeMessage() {
      this.seen = !this.seen
    }
  },

  computed: {
    reversedName() {
      return this.name.split('').reverse().join('');
    },

    timeNow: function () {
      return Date.now();
    }
  }
}
</script>

<style scoped>
.home {

}

ol {
  margin-bottom: 40px;
}

.message {
  margin-bottom: 40px;
}

.my-input {
  margin-bottom: 40px;
}

.my-input input {
  padding: 5px 10px;
}

.js-expressions {
  margin-bottom: 40px;
}

.directives {
  margin-bottom: 40px;
}

.computed-props {
  margin-bottom: 40px;
}

</style>
