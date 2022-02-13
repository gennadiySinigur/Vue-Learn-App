<template>
  <div>
    <h1>Components Basics</h1>

    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post in posts"
        :title="post.title"
        :key="post.id"
        @enlarge-text="enlargeText"
        @normalize-text="normalizeText"
      />
    </div>

    <custom-input v-model="searchText"></custom-input>

    <alert-box>Something bad happened.</alert-box>

    <dynamic-components />
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import CustomInput from "@/components/CustomInput";
import AlertBox from "@/components/AlertBox";
import DynamicComponents from "@/components/DynamicComponents/DynamicComponents";

export default {
  components: {
    DynamicComponents,
    AlertBox,
    CustomInput,
    BlogPost,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' },
      ],
      postFontSize: 1,
      searchText: '',
    }
  },
  methods: {
    enlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    },
    normalizeText() {
      this.postFontSize = 1;
    }
  }
}
</script>

<style scoped></style>