import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Essentials/Home.vue';
import Day2 from "@/views/Essentials/Day2";
import Day3 from "@/views/Essentials/Day3";
import Day4 from "@/views/Essentials/Day4";
import ComponentsBasics from "@/views/Essentials/ComponentsBasics";
import Essentials from "@/views/Essentials/Essentials";
import ComponentsInDepth from "@/views/ComponentsInDepth/ComponentsInDepth";
import ComponentRegistration from "@/views/ComponentsInDepth/ComponentRegistration";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/essentials',
    component: Essentials,
    children: [
      {
        path: '/day2',
        component: Day2,
      },
      {
        path: '/day3',
        component: Day3
      },
      {
        path: '/day4',
        component: Day4,
      },
      {
        path: '/components-basics',
        component: ComponentsBasics,
      }
    ],
  },
  {
    path: '/components-in-depth',
    component: ComponentsInDepth,
    children: [
      {
        path: '/component-registration',
        component: ComponentRegistration,
      }
    ],
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
