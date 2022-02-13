<template>
  <div>
    <h2>List Rendering</h2>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>

    <ul>
      <li v-for="value in object">{{ value }}</li>
    </ul>

    <ul>
      <li v-for="(value, name) in object">
        {{ name }} : {{ value }}
      </li>
    </ul>

    <ul>
      <li v-for="(value, name, index) in object">
        {{ index }}.  {{ name }} : {{ value }}
      </li>
    </ul>

    <button @click="consoleLog">console.log</button>

    <h2>Displaying Filtered/Sorted Results</h2>
    <ul>
      <li v-for="number in evenNumbers">{{ number }}</li>
    </ul>

    <h2><span class="green">v-for</span> with a Range</h2>
    <div>
      <div v-for="n in 15">{{ n }}</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          message: 'Foo',
        },
        {
          id: 2,
          message: 'Bar',
        },
        {
          id: 3,
          message: 'Hello',
        },
        {
          id: 4,
          message: 'World',
        },
      ],

      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },

      numbers: [1, 2, 3, 4, 5, 6, 7]
    }
  },

  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    }
  },

  methods: {
    consoleLog() {
      this.items.push({
        id: this.items[this.items.length - 1].id + 1,
        message: 'Buzz'
      })

      console.log(this.items)
    }
  }
}
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

button {
  margin-bottom: 40px;
}

.green {
  color: #42b983;
}
</style>