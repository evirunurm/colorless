import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
import MusicView from '../views/Music.vue';
import LoreView from '../views/Lore.vue';
import ContactView from '../views/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView
    },
    {
      path: '/lore',
      name: 'lore',
      component: LoreView
    },
    {
      path: '/contact',
      name: 'contact',
     component: ContactView
    }
  ]
})

export default router
