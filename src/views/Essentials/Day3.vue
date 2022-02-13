<template>
  <div>
    <div class="ex-1">
      <h2>Event Handling</h2>
      <div>{{ counter }}</div>
      <button v-on:click="counter += 1">Add 1</button>
    </div>

    <div class="ex-2">
      <button @click="greet">Greet</button>
    </div>

    <div class="ex-3">
      <button @click="say('Hi')">Say Hi</button>
      <button @click="say('Good bye')">Say Good Bye</button>
    </div>

    <div class="ex-4">
      <button
        @click="warn('Form cannot be submitted yet.', $event)"
      >
        Submit
      </button>
    </div>

    <div class="ex-5">
      <!-- the click event's propagation will be stopped -->
      <a v-on:click.stop="doThis"></a>

      <!-- the submit event will no longer reload the page -->
      <form v-on:submit.prevent="onSubmit"></form>

      <!-- modifiers can be chained -->
      <a v-on:click.stop.prevent="doThat"></a>

      <!-- just the modifier -->
      <form v-on:submit.prevent></form>

      <!-- use capture mode when adding the event listener -->
      <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
      <div v-on:click.capture="doThis">...</div>

      <!-- only trigger handler if event.target is the element itself -->
      <!-- i.e. not from a child element -->
      <div v-on:click.self="doThat">...</div>
    </div>

    <div class="ex-6">
      <h2>Key modifiers</h2>
      <input @keyup.enter="pressEnter" type="text">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      name: 'Vue js',
    }
  },

  methods: {
    greet() {
      alert('Hello ' + this.name + '!');
    },

    say(message) {
      alert(message);
    },

    warn(message, event) {
      // now we have access to the native event
      if(event) {
        event.preventDefault();
      }

      alert(message);
    },

    pressEnter() {
      console.log('You pressed Enter')
    }
  }
}

</script>

<style scoped>
.ex-1,
.ex-2,
.ex-3,
.ex-4,
.ex-5 {
  margin-bottom: 40px;
}
</style>