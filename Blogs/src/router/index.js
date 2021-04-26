import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts  from "../components/pages/Posts.vue";
import PostDetails  from "../components/pages/PostDetails.vue";
import UserDetails from "../components/pages/UserDetails.vue";
import NotFound from "../components/pages/NotFound.vue";

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/posts'},

  { path: '/userDetails/:id', component: UserDetails},
  { path: '/posts',component: Posts},
  { path: '/posts/:id',  component: PostDetails },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
