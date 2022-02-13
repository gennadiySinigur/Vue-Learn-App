<template>
  <div class="dynamic">
    <h2>Dynamic Components</h2>

    <button
      v-for="tab in tabs"
      :key="tab"
      @click="currentTab = tab"
      :class="['tab-button', { active: currentTab === tab }]"
    >
      {{ tab }}
    </button>

    <component
      :is="currentTabComponent"
      class="tab"
    />
  </div>
</template>

<script>
import TabArchive from "@/components/DynamicComponents/TabArchive";
import TabHome from "@/components/DynamicComponents/TabHome";
import TabPosts from "@/components/DynamicComponents/TabPosts";

export default {
  components: {
    TabHome,
    TabPosts,
    TabArchive
  },
  data() {
    return {
      tabs: ['Home', 'Posts', 'Archive'],
      currentTab: 'Home',
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped>
.dynamic {
  margin-bottom: 50px;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>